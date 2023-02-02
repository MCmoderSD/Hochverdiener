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
        return base.Execute(command);
    }
    private string[] readJokes()
    {
        Assembly assembly = Assembly.GetExecutingAssembly();
        string resourceName = "ReadLinesFromEmbeddedResource.Content.jokes.txt";
        using (Stream stream = assembly.GetManifestResourceStream(resourceName))
        using (StreamReader reader = new StreamReader(stream))
        {
            string[] lines = new string[1];
            int lineCount = 0;
            string line;
            while ((line = reader.ReadLine()) != null)
            {
                if (lineCount == lines.Length)
                {
                    Array.Resize(ref lines, lines.Length * 2);
                }
                lines[lineCount++] = line;
            }
            Array.Resize(ref lines, lineCount);
            foreach (string currentLine in lines)
            {
                Console.WriteLine(currentLine);
            }
        }
        string[] jokes = File.ReadAllLines("jokes.txt");
        return jokes;
    }
}