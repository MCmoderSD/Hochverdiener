using Discord.Commands;
using Google.Apis.Services;
using Google.Apis.YouTube.v3;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Discord;
using Discord.WebSocket;

namespace Hochverdiener.Commands.Music
{
    public class Play : BaseCommand
    {
        private static readonly List<string> Playlist = new List<string>();
        private static readonly YouTubeService YoutubeService = new YouTubeService(new BaseClientService.Initializer()
        {
            ApiKey = keys.Keys.YouTubeDataApiKey,
            ApplicationName = "Hochverdiener"
        });

        public Play() : base("play", null, "Spielt den angegebenen Song auf YouTube und fügt ihn zur Playlist hinzu.", new[] {
            new SlashCommandOptionBuilder()
                .WithName("name")
                .WithDescription("Der Name des Songs.")
                .WithRequired(true)
                .WithType(ApplicationCommandOptionType.String)
        }, null, false)
        {
        }

        public override async Task Execute(SocketSlashCommand command)
        {
            var searchQuery = command.Data.Options.First(x => x.Name == "name").Value.ToString();
            var searchListRequest = YoutubeService.Search.List("snippet");
            searchListRequest.Q = searchQuery;
            searchListRequest.MaxResults = 1;
            searchListRequest.Type = "video";
            var searchListResponse = await searchListRequest.ExecuteAsync();
            var videoId = searchListResponse.Items.FirstOrDefault()?.Id.VideoId;
            if (videoId != null)
            {
                var youtubeLink = $"https://www.youtube.com/watch?v={videoId}";
                Playlist.Add(youtubeLink);

                var voiceChannel = (command.User as SocketGuildUser)?.VoiceChannel;
                if (voiceChannel == null)
                {
                    await command.RespondAsync($"Du musst dich in einem Voice-Channel befinden, um diesen Command auszuführen.");
                    return;
                }

                try
                {
                    var audioClient = await voiceChannel.ConnectAsync();
                    Console.WriteLine($"Der Bot wurde erfolgreich in den Channel {voiceChannel.Name} verschoben.");

                    // Play the audio here
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Fehler beim Verschieben des Bots in den Channel {voiceChannel.Name}: {ex.Message}");
                    await command.RespondAsync($"Fehler beim Verschieben des Bots in den Channel {voiceChannel.Name}: {ex.Message}");
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
}
