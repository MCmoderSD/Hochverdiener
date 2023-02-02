using System.Net;
using Discord;
using Discord.WebSocket;

namespace Hochverdiener_3._0.Commands;

public class Insult : BaseCommand
{
    public Insult() : base(
        name: "Insult", 
        aliases: null, 
        description: "Ich beleidige einen User", 
        options: new[] {new SlashCommandOptionBuilder().WithName("user").WithDescription("welchen User ich beleidigen soll").WithType(ApplicationCommandOptionType.User).WithRequired(false)},
        permission: null)
    {
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        SocketUser user = command.User;
        if(command.Data.Options.Count > 0) user = (SocketUser) command.Data.Options.First().Value;
        string[] insults = File.ReadAllLines("insults.txt");
        command.RespondAsync(insults[new Random().Next(0, insults.Length)].Replace("%member%", user.Mention));
        return base.Execute(command);
    }
}