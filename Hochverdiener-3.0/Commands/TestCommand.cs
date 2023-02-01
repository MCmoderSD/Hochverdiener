using Discord.WebSocket;

namespace Hochverdiener_3._0.Commands;

public class TestCommand : BaseCommand
{
    public TestCommand() : base(
        "TestCommand", 
        null, 
        "Dies ist nur ein Test Command", 
        null, 
        null)
    {
        
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        command.RespondAsync("Test Command");
        return base.Execute(command);
    }
}