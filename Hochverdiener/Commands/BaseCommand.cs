using Discord;
using Discord.WebSocket;
using Hochverdiener.Commands.Chat;
using Hochverdiener.Commands.Music;

namespace Hochverdiener.Commands;

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
        String parameters;
        if(command.Data.Options.Count == 0)
            parameters = "None";
        else
            parameters = command.Data.Options.Select(x => x.Name + ": " + x.Value).Aggregate((x, y) => x + ", " + y);
        Logger.Log("Command executed: " + command.Data.Name + " by " + command.User.Username + "#" + command.User.Discriminator + " with parameters " + parameters);
        return Task.CompletedTask;
    }
    
    public static void Init()
    {
        InitChatCommands();
        InitMusicCommands();
        new TestCommand().Register();
    }

    public static void InitChatCommands()
    {
        new ChatGPT().Register();
        new Dicksize().Register();
        new Fact().Register();
        new Insult().Register();
        new IQ().Register();
        new Joke().Register();
        new Mobbing().Register();
        new SexistScore().Register();
        new Zahl().Register();
        new Play().Register();
    }
    public static void InitMusicCommands()
    {
        new Play().Register();
    }
}