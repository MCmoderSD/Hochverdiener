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
        options: new[] {new SlashCommandOptionBuilder().WithName("user").WithDescription("Ich sag dir den IQ von einem User").WithType(ApplicationCommandOptionType.User).WithRequired(false)},
        permission: null)
    {
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        var taggedUser = (SocketGuildUser) command.Data.Options.First().Value;
        SocketUser user = command.User;
        Console.WriteLine(taggedUser);
        if(taggedUser != null) user = taggedUser;
        var iq = new Random().Next(-12, 210);
        command.RespondAsync( user.Mention + " dein IQ ist " + iq);
        Console.WriteLine("IQ Command executed");
        return base.Execute(command);
    }
}