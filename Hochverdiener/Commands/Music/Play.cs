using Discord;
using Discord.WebSocket;
using Google.Apis.Services;
using Google.Apis.YouTube.v3;
using Hochverdiener.keys;

namespace Hochverdiener.Commands.Music;

public class Play : BaseCommand
{
    private static readonly List<string> Playlist = new();

    private static readonly YouTubeService YoutubeService = new(new BaseClientService.Initializer
    {
        ApiKey = Keys.YouTubeDataApiKey,
        ApplicationName = "Hochverdiener"
    });

    public Play() : base("play", null, "Spielt den angegebenen Song auf YouTube und fügt ihn zur Playlist hinzu.", new[]
    {
        new SlashCommandOptionBuilder()
            .WithName("name")
            .WithDescription("Der Name des Songs.")
            .WithRequired(true)
            .WithType(ApplicationCommandOptionType.String)
    }, null)
    {
    }

    public override async Task Execute(SocketSlashCommand command)
    {
        string youtubeLink = null;
        var searchQuery = command.Data.Options.First(x => x.Name == "name").Value.ToString();
        var searchQueryPrepared = searchQuery.Replace(" ", "");
        if (searchQueryPrepared.StartsWith("https://"))
        {
            youtubeLink = searchQuery;
        }
        else
        {
            var searchListRequest = YoutubeService.Search.List("snippet");
            searchListRequest.Q = searchQuery;
            searchListRequest.MaxResults = 1;
            searchListRequest.Type = "video";
            var searchListResponse = await searchListRequest.ExecuteAsync();
            var videoId = searchListResponse.Items.FirstOrDefault()?.Id.VideoId;

            if (videoId != null) youtubeLink = $"https://www.youtube.com/watch?v={videoId}";
        }

        if (youtubeLink != null)
        {
            Playlist.Add(youtubeLink);

            var voiceChannel = (command.User as SocketGuildUser)?.VoiceChannel;
            if (voiceChannel == null)
            {
                await command.RespondAsync(
                    "Du musst dich in einem Voice-Channel befinden, um diesen Command auszuführen.");
                return;
            }

            try
            {
                var audioClient = await voiceChannel.ConnectAsync();
                Console.WriteLine($"Der Bot wurde erfolgreich in den Channel {voiceChannel.Name} verschoben.");

                //Todo: Play the audio here
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Fehler beim Verschieben des Bots in den Channel {voiceChannel.Name}: {ex.Message}");
                await command.RespondAsync(
                    $"Fehler beim Verschieben des Bots in den Channel {voiceChannel.Name}: {ex.Message}");
                return;
            }

            await command.RespondAsync($"Der Song `{searchQuery}` wurde erfolgreich zur Playlist hinzugefügt!");
            Console.WriteLine($"Der Song '{searchQuery}' wurde erfolgreich zur Playlist hinzugefügt: {youtubeLink}");
        }
        else
        {
            await command.RespondAsync($"Es konnte kein Song mit dem Namen `{searchQuery}` gefunden werden.");
        }
    }
}