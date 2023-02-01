using Discord.WebSocket;

namespace Hochverdiener_3._0.Commands;

public class TestCommand : BaseCommand
{
    public TestCommand() : base(
        name: "TestCommand", 
        aliases: null, 
        description: "Dies ist nur ein Test Command", 
        options: null, 
        permission: null)
    {
        
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        command.RespondAsync("Test Command");
        return base.Execute(command);
    }
}