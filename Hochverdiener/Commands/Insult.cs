using System.Reflection;
using Discord;
using Discord.WebSocket;
using Hochverdiener_3._0;

namespace Hochverdiener._0.Commands;

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
        command.RespondAsync(ReadInsults()[new Random().Next(0, ReadInsults().Length)].Replace("%member%", user.Mention));
        return base.Execute(command);
    }
    private string[] ReadInsults()
    {
        Assembly assembly = Assembly.GetExecutingAssembly();
        string resourceName = "Hochverdiener_3._0.Content.insults.txt";
        using (Stream? stream = assembly.GetManifestResourceStream(resourceName))
            if (stream != null)
                using (StreamReader reader = new StreamReader(stream))
                {
                    string result = reader.ReadToEnd();
                    string[] insults = result.Split(new[] { Environment.NewLine }, StringSplitOptions.None);
                    return insults;
                }
        return Array.Empty<string>();
    }
}