# Hochverdiener
Currently the Hochverdiener bot is still online in v2, because v3 is still in development.<br>
Hochverdiener v3 is currently not available for public use but you can follow the installation and host it on your local machine.<br>

You can add the bot to your server: [Click Here](https://discord.com/api/oauth2/authorize?client_id=954136734482989096&permissions=515869494976&scope=bot)<br>
## Commands
**Working Commands:**
- Dicksize
- Fact
- Insult
- IQ
- Joke
- Mobbing
- SexistScore
- Zahl<br>

**Commands in Development:**
- ChatGPT integration
- Music
## Installation
If you want to host your own bot you need to perform the following steps:
1. Clone the repository into a IDE that supports C# and .NET 7.0 I recommend [JetBrains Rider](https://www.jetbrains.com/rider/).
2. Create a folder called **keys** in the root directory of the project.
3. in the **keys** folder create C# class called **Tokens.cs** and paste your bot token in it.
4. in the class add the following code:
```csharp
namespace Hochverdiener.keys;

public class Token
{
    public static readonly string token = "PUT_YOUR_TOKEN_HERE";
    public static readonly string devToken = "PUT_YOUR_TOKEN_HERE";
    public static readonly string devBotCSharp = "PUT_YOUR_TOKEN_HERE";
}
```
5. Make sure to replace the ``PUT_YOUR_TOKEN_HERE`` with your bot token.
6. Run the project and the bot should be online.
7. The exe and dll  files are located in the bin folder of the project.

If you want you can create own Commands inside the **Commands** folder.<br>
To enable them you need to add them to **BaseCommand.cs** in the **src** folder.<br>
```csharp
using Discord;
using Discord.WebSocket;
using Hochverdiener.Commands;

namespace Hochverdiener;

public class BaseCommand
{
    public static List<BaseCommand> Commands = new();
    public string Name { get; }
    public string[]? Aliases { get; }
    public string Description { get; }
     private bool ServerOnly { get; }
     private GuildPermission? RequiredPermission { get; }
     private SlashCommandOptionBuilder[]? Options { get; }
    
    public BaseCommand(string name,string[]? aliases, string description, SlashCommandOptionBuilder[]? options,GuildPermission? permission, bool serverOnly = false)
    {
        Options = options;
        RequiredPermission = permission;
        Aliases = aliases;
        Name = name.ToLower();
        Description = description;
        ServerOnly = serverOnly;
    }

    public void Register()
    {
        string[] finalCommands = new string[1];
        if (Aliases != null)
        {
            finalCommands = new string[Aliases.Length + 1];
            for (int i = 0; i < Aliases.Length; i++)
            {
                finalCommands[i + 1] = Aliases[i];
            }
        }

        finalCommands[0] = Name;
        foreach (var command in finalCommands)
        {
            var builder = new SlashCommandBuilder();
            builder.WithName(command);
            builder.WithDescription(Description);
            builder.WithDefaultMemberPermissions(RequiredPermission);
            builder.WithDMPermission(!ServerOnly);
            if (Options != null) builder.AddOptions(Options);
            Program.Client?.CreateGlobalApplicationCommandAsync(builder.Build());
        }
        Commands.Add(this);
    }
    
    public virtual Task Execute(SocketSlashCommand command)
    {
        //ToDo Logging Feature
        return Task.CompletedTask;
    }
    
    public static void Init()
    {
        new Dicksize().Register();
        new Fact().Register();
        new Insult().Register();
        new IQ().Register();
        new Joke().Register();
        new Mobbing().Register();
        new SexistScore().Register();
        new Zahl().Register();
        new YOUR_COMMAND_CLASS_NAME().Register()    <---ADD THEM HERE
        new TestCommand().Register();   
    }
}
```