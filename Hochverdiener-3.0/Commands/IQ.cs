using System.Net;
using Discord;
using Discord.WebSocket;

namespace Hochverdiener_3._0.Commands;

public class IQ : BaseCommand
{
    public IQ() : base(
        name: "IQ", 
        aliases: null, 
        description: "Misst den IQ eines Users", 
        options: new[] {new SlashCommandOptionBuilder().WithName("user").WithDescription("User den du testen willst").WithType(ApplicationCommandOptionType.User).WithRequired(false)}, 
        permission: null)
    {
        
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        SocketUser user = command.User;
        if(command.Data.Options.Count > 0) user = (SocketUser) command.Data.Options.First().Value;
        var iq = new Random().Next(-12, 210);
        command.RespondAsync( user.Mention + " dein IQ ist " + iq);
        return base.Execute(command);
    }
}