using Discord;
using Discord.WebSocket;
using Hochverdiener_3._0.Commands;

namespace Hochverdiener_3._0;

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

    public void register()
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
            Program.client.CreateGlobalApplicationCommandAsync(builder.Build());
        }
        Commands.Add(this);
    }
    
    public virtual Task Execute(SocketSlashCommand command)
    {
        return Task.CompletedTask;
    }
    
    public static void init()
    {
        new TestCommand().register();
    }

}