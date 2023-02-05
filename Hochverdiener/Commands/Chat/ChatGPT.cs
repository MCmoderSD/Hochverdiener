using System.Text;
using Discord;
using Discord.WebSocket;
using Newtonsoft.Json;
using System.Text.Json;
using Hochverdiener.keys;
using OpenAI_API;
using OpenAI_API.Completions;
using OpenAI_API.Models;
using JsonSerializer = System.Text.Json.JsonSerializer;

namespace Hochverdiener.Commands.Chat;

public class ChatGPT : BaseCommand
{
    public ChatGPT() : base(
        name: "ChatGPT", 
        aliases: null, 
        description: "Ich beantworte deine Fragen mithilfe meines HochverdienerIQ's",
        options: new[] {new SlashCommandOptionBuilder().WithName("question").WithDescription("Frage die du stellen willst").WithType(ApplicationCommandOptionType.String).WithRequired(true)},
        permission: null)
    {
        
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        var question = command.Data.Options.First().Value.ToString();
        command.RespondAsync(AskChatGPT(question));
        return base.Execute(command);
    }
//ToDo Fix this
    private string AskChatGPT(string? question)
    {
        var api = new OpenAIAPI(Keys.OpenAiApiKey);
        var result = api.Completions.GetCompletion(question);
        Console.WriteLine(result.Result);
        return result.Result;
    }
}