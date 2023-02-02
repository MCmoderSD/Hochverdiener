using Discord;
using Discord.WebSocket;
using Hochverdiener._0;
using Hochverdiener._0.keys;

namespace Hochverdiener_3._0
{
    public class Program
    {
        public static Task Main(string[] args) => new Program().MainAsync();
        public static DiscordSocketClient? Client;

        private Task Log(LogMessage msg)
        {
            Console.WriteLine(msg.ToString());
            return Task.CompletedTask;
        }


        private async Task MainAsync()
        {
            Client = new DiscordSocketClient();

            Client.Log += Log;

            var token = Token.devBotCSharp;
            await Client.LoginAsync(TokenType.Bot, token);
            await Client.StartAsync();
            Client.Ready += Client_Ready;
            Client.SlashCommandExecuted += SlashCommand;

            await Task.Delay(-1);
        }

#pragma warning disable CS1998
        private async Task Client_Ready()
#pragma warning restore CS1998
        {
            BaseCommand.Init();
        }

        private async Task SlashCommand(SocketSlashCommand command)
        {
            foreach (var c in BaseCommand.Commands)
            {

                if (c.Name == command.Data.Name || c.Aliases != null && c.Aliases.Contains(command.Data.Name))
                {
                    await c.Execute(command);
                }
            }
        }
    }
}