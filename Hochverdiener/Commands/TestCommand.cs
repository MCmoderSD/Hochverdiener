using Discord;
using Discord.WebSocket;
using Hochverdiener_3._0;

namespace Hochverdiener._0.Commands;

public class TestCommand : BaseCommand
{
    public TestCommand() : base(
        name: "TestCommand", 
        aliases: null, 
        description: "Dies ist nur ein Test Command im moment für embeds", 
        options: null, 
        permission: GuildPermission.Administrator)
    {
        
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        command.RespondAsync("Test Embed", new []{new EmbedBuilder().WithColor(Color.Gold).WithCurrentTimestamp().WithTitle("Test").WithThumbnailUrl("https://hypixel.net/styles/hypixel-v2/images/header-logo.png").Build()});
        return base.Execute(command);
    }
}