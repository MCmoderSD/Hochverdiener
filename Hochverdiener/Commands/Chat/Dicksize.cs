using Discord;
using Discord.WebSocket;

namespace Hochverdiener.Commands.Chat;

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
        SocketUser user = command.User;
        if(command.Data.Options.Count > 0) user = (SocketUser) command.Data.Options.First().Value;
        string[] dickWords =
        {
            "Dick", "Schwanz", "Schlauch", "Gartenschlauch", "Rohr", "Stahlrohr", "Aubergine", "🍆", "Lulu", "Cöck",
            "Glied", "männliches Geschlechtsorgan", "Phallus", "Schniepel", "Zumpferl", "Johannes", "Jonny", "Latte",
            "Lümmel", "Nudel", "Spatz", "Zipfel", "Gurke", "Knüppel", "Kolben", "Pfeife", "Pinsel", "Prügel", "Riemen",
            "Rüssel", "Rute", "Zauberstab", "Wunderhorn", "Schniedelwutz", "Pimmel", "kleiner Mann", "Dödel"
        };
        int laenge = new Random().Next(-3, 32), breite = new Random().Next(1, 7);
        command.RespondAsync(user.Mention + "'s " + dickWords[new Random().Next(0, dickWords.Length)] + " ist " + laenge + "cm lang und " + breite + "cm breit 🍆");
        return base.Execute(command);
    }
}