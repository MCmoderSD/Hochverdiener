using System.Net;
using Discord;
using Discord.WebSocket;

namespace Hochverdiener_3._0.Commands;

public class IQ : BaseCommand
{
    public IQ() : base(
        "IQ", 
        null, 
        "Misst den IQ eines Users", 
        options: new[] {new SlashCommandOptionBuilder().WithName("user").WithDescription("User den du testen willst").WithType(ApplicationCommandOptionType.User).WithRequired(false)},
            null)
    {
        SlashCommandOptionBuilder option = new SlashCommandOptionBuilder();
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        var taggedUser = (SocketGuildUser) command.Data.Options.First().Value;
        SocketUser user = command.User;
        Console.WriteLine(taggedUser);
        if(taggedUser != null) user = taggedUser;
        var iq = new Random().Next(-12, 210);
        command.RespondAsync( user.Mention + " dein IQ ist " + iq);
        Console.Write(user.Username);
        Console.WriteLine("IQ Command executed");
        return base.Execute(command);
    }
}