using Discord.WebSocket;

namespace Hochverdiener.Commands.Chat;

public class Zahl : BaseCommand
{
    public Zahl() : base(
        name: "Zahl", 
        aliases: null, 
        description: "Ich errate an welche zahl du gedacht hast",
        options: null, 
        permission: null)
    {
        
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        SocketUser user = command.User;
        var zahl = new Random().Next(0, 10);
        command.RespondAsync( user.Mention + "denk an eine Zahl zwischen 1-10!");
        Thread.Sleep(1500);
        command.RespondAsync("Bereit?");
        Thread.Sleep(3000);
        command.RespondAsync("Ok gut lass mich kurz nachdenken");
        Thread.Sleep(5500);
        command.RespondAsync(user.Mention + " du hast an die Zahl " + zahl + " gedacht!");
        Thread.Sleep(5000);
        command.RespondAsync("und wer behauptet dass ich falsch liege ist n Homo");
        return base.Execute(command);
    }
    
}