using Discord;
using Discord.WebSocket;

namespace Hochverdiener_3._0.Commands;

public class Dicksize : BaseCommand
{
    public Dicksize() : base(
        name: "Dicksize", 
        aliases: null, 
        description: "Ich sag dir wie lang dein schwanz ist", 
        options: new[] {new SlashCommandOptionBuilder().WithName("user").WithDescription("Ich sag dir wie lang der Schwanz von einem User ist").WithType(ApplicationCommandOptionType.User).WithRequired(false)},
        permission: null)
    {
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        var taggedUser = (SocketGuildUser) command.Data.Options.First().Value;
        SocketUser user = command.User;
        if(taggedUser != null) user = taggedUser;
        string[] dickWords =
        {
            "Dick", "Schwanz", "Schlauch", "Gartenschlauch", "Rohr", "Stahlrohr", "Aubergine", "🍆", "Lulu", "Cöck",
            "Glied", "männliches Geschlechtsorgan", "Phallus", "Schniepel", "Zumpferl", "Johannes", "Jonny", "Latte",
            "Lümmel", "Nudel", "Spatz", "Zipfel", "Gurke", "Knüppel", "Kolben", "Pfeife", "Pinsel", "Prügel", "Riemen",
            "Rüssel", "Rute", "Zauberstab", "Wunderhorn", "Schniedelwutz", "Pimmel", "kleiner Mann", "Dödel"
        };
        int laenge = new Random().Next(-3, 32), breite = new Random().Next(1, 7);
        command.RespondAsync(user.Mention + "'s " + dickWords[new Random().Next(0, dickWords.Length)] + " ist " + laenge + "cm lang und " + breite + "cm breit 🍆");
        Console.WriteLine("Dicksize Command executed");
        return base.Execute(command);
    }
}