using Discord;
using Discord.WebSocket;
using Hochverdiener_3._0;

public class Program
{
    public static Task Main(string[] args) => new Program().MainAsync();
    private Task Log(LogMessage msg)
    {
        Console.WriteLine(msg.ToString());
        return Task.CompletedTask;
    }
    private DiscordSocketClient _client;

    public async Task MainAsync()
    {
        _client = new DiscordSocketClient();

        _client.Log += Log;

        var token = Token.devToken;
        await _client.LoginAsync(TokenType.Bot, token);
        await _client.StartAsync();
        
        await Task.Delay(-1);
    }
}