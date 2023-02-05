using Discord;
using Discord.WebSocket;

namespace Hochverdiener.Commands.Chat;

public class SexistScore : BaseCommand
{
    public SexistScore() : base(
        name: "SexistScore", 
        aliases: null, 
        description: "Ich schaue wie sexistisch jemand ist", 
        options: new[] {new SlashCommandOptionBuilder().WithName("user").WithDescription("von welchem User willst du den Sexist Score wissen willst").WithType(ApplicationCommandOptionType.User).WithRequired(false)}, 
        permission: null)
    {
        
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        SocketUser user = command.User;
        if(command.Data.Options.Count > 0) user = (SocketUser) command.Data.Options.First().Value;
        var sexistScore = new Random().Next(-12, 210);
        command.RespondAsync( user.Mention + " hat heute einen Sexistscore von" + sexistScore);
        return base.Execute(command);
    }
}