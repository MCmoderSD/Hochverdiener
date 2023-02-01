using System.Diagnostics;
using Discord;
using Discord.WebSocket;
using Hochverdiener_3._0;
using Hochverdiener_3._0.Commands;

public class Program
{
    public static Task Main(string[] args) => new Program().MainAsync();
    public static DiscordSocketClient client;
    private Task Log(LogMessage msg)
    {
        Console.WriteLine(msg.ToString());
        return Task.CompletedTask;
    }


    private async Task MainAsync()
    {
        client = new DiscordSocketClient();

        client.Log += Log;

        var token = Token.devBotCSharp;
        await client.LoginAsync(TokenType.Bot, token);
        await client.StartAsync();
        client.Ready += Client_Ready;
        client.SlashCommandExecuted += SlashCommand;
       
        await Task.Delay(-1);
    }

    private async Task Client_Ready()
    {
         BaseCommand.init();
    }
    
    private async Task SlashCommand(SocketSlashCommand command)
    {
        foreach (var c in BaseCommand.Commands)
        {
            
            if (c.Name == command.Data.Name || c.Aliases !=null && c.Aliases.Contains(command.Data.Name))
            {
                await c.Execute(command);
            }
        }
    }
}