using System.Reflection;
using Discord.WebSocket;

namespace Hochverdiener_3._0.Commands;

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
        command.RespondAsync(readJokes()[new Random().Next(0, readJokes().Length)]);
        for (int i = 0; i < readJokes().Length; i++)
        {
            Console.WriteLine(readJokes()[i]);
        }
        return base.Execute(command);
    }
    private string[] readJokes()
    {
        Assembly assembly = Assembly.GetExecutingAssembly();
        string resourceName = "Hochverdiener-3.0.Content.jokes.txt";
        using (Stream? stream = assembly.GetManifestResourceStream(resourceName))
        using (StreamReader reader = new StreamReader(stream))
        {
            string result = reader.ReadToEnd();
            string[] jokes = result.Split(new[] { Environment.NewLine }, StringSplitOptions.None);
            return jokes;
        }
    }
}