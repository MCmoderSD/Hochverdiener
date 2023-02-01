using Discord;
using Discord.WebSocket;

namespace Hochverdiener_3._0.Commands;

public class iq : BaseCommand
{
    public iq() : base(
        "iq", 
        null, 
        "Zeigt dir dein IQ an", 
        new []{new SlashCommandOptionBuilder()
            .WithName("user")
            .WithDescription("Der User dessen IQ du sehen willst")
            .WithType(ApplicationCommandOptionType.User)
            .WithRequired(false)}, 
        null)
    {
        
    }
    public override Task Execute(SocketSlashCommand command)
    {
        var IQ = new Random().Next(-10, 212);
        var user = command.User.Mention;
        command.RespondAsync( user + " hat einen IQ von " + IQ );
        return base.Execute(command);
    }
}