using System.Reflection;
using Discord.WebSocket;
using Hochverdiener;

namespace Hochverdiener.Commands;

public class Joke : BaseCommand
{
    public Joke() : base(
        name: "Joke", 
        aliases: null, 
        description: "Ich mach n Witz",
        options: null, 
        permission: null)
    {
        
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        command.RespondAsync(ReadJokes()[new Random().Next(0, ReadJokes().Length)]);
        return base.Execute(command);
    }
    private string[] ReadJokes()
    {
        Assembly assembly = Assembly.GetExecutingAssembly();
        string resourceName = "Hochverdiener.Content.jokes.txt";
        using (Stream? stream = assembly.GetManifestResourceStream(resourceName))
            if (stream != null)
                using (StreamReader reader = new StreamReader(stream))
                {
                    string result = reader.ReadToEnd();
                    string[] jokes = result.Split(new[] { Environment.NewLine }, StringSplitOptions.None);
                    return jokes;
                }

        return Array.Empty<string>();
    }
}