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
        options: new SlashCommandOptionBuilder[] {new SlashCommandOptionBuilder
        {
            Name = null,
            Description = null,
            Type = (ApplicationCommandOptionType)0,
            IsDefault = null,
            IsRequired = null,
            IsAutocomplete = true,
            MinValue = null,
            MaxValue = null,
            MinLength = null,
            MaxLength = null,
            Choices = null,
            Options = null,
            ChannelTypes = null
        }.WithName("User").WithDescription("User den du testen willst").WithType(ApplicationCommandOptionType.User).WithRequired(false)},
            null)
    {
        SlashCommandOptionBuilder option = new SlashCommandOptionBuilder();
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        var taggedUser = command.Data.Options.ToString();
        var iq = new Random().Next(-12, 210);
        var user = Methods.ReplyToUserTag(command);
        command.RespondAsync( user + " dein IQ ist " + iq);
        Console.Write(taggedUser);
        Console.WriteLine("IQ Command executed");
        return base.Execute(command);
    }
}