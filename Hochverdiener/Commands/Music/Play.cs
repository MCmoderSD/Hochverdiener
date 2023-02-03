using Discord;

namespace Hochverdiener.Commands.Music;

public class Play : BaseCommand
{
    public Play() : base(
        name: "Play", 
        aliases: null, 
        description: "Spielt einen Song ab", 
        options: new[] {new SlashCommandOptionBuilder().WithName("song").WithDescription("Der Song den du abspielen willst").WithType(ApplicationCommandOptionType.String).WithRequired(true)}, 
        permission: null)
    {
        
    }
}