using System.Reflection;
using Discord;
using Discord.WebSocket;

namespace Hochverdiener.Commands;

public class Mobbing : BaseCommand
{
    public Mobbing() : base(
        name: "Mobbing", 
        aliases: null, 
        description: "Ich mobbe einen User", 
        options: new[] {new SlashCommandOptionBuilder().WithName("user").WithDescription("wer wird das mobbing Opfer?").WithType(ApplicationCommandOptionType.User).WithRequired(true)},
        permission: null)
    {
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        SocketUser user = command.User;
        if(command.Data.Options.Count > 0) user = (SocketUser) command.Data.Options.First().Value;
        user.SendMessageAsync(ReadInsults()[new Random().Next(0, ReadInsults().Length)].Replace("%member%", user.Mention));
        return base.Execute(command);
    }
    private string[] ReadInsults()
    {
        Assembly assembly = Assembly.GetExecutingAssembly();
        string resourceName = "Hochverdiener.Content.insults.txt";
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