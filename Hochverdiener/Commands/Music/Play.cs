using Discord;
using Discord.WebSocket;

namespace Hochverdiener.Commands.Music;

public class Play : BaseCommand
{
    public Play() : base(
        name: "Play", 
        aliases: null, 
        description: "Spielt einen Song ab", 
        options: new[] {new SlashCommandOptionBuilder().WithName("song").WithDescription("Der Song den du abspielen willst").WithType(ApplicationCommandOptionType.String).WithRequired(true)}, 
        permission: null)
    {

    }
    public override Task Execute(SocketSlashCommand command)
    {
        SocketUser user = command.User;
        var input = command.Data.Options.First().Value.ToString();
        var song = src.YouTubeEngine.SearchSongsAsync(input);
        command.RespondAsync(user.Mention + " spielt " + song + " ab");
        return base.Execute(command);
    }
}
