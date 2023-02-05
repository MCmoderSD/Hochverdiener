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
        options: new[] {new SlashCommandOptionBuilder().WithName("question").WithDescription("Frage die du stellen willst").WithType(ApplicationCommandOptionType.String).WithRequired(true), new SlashCommandOptionBuilder().WithName("questionquality").WithDescription("Schnell generiert oder langsam aber besser").WithRequired(true).WithType(ApplicationCommandOptionType.String).AddChoice("Schnell", "ada").AddChoice("Qualitativ", "davinci")},
        permission: null)
    {
        
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
       
        var question = command.Data.Options.First().Value.ToString();
        command.RespondAsync(AskChatGPT(question,command.Data.Options.Last().Value.ToString()));
        return base.Execute(command);
    }
    private string AskChatGPT(string? question, string model_name)
    {
        //TODO: Conversations
        Model model;
        string key;
        if (model_name == "ada")
        {
            key = Keys.OpenAiApiKeyAdaText;
            model = Model.BabbageText;
        }
        else
        {
            key = Keys.OpenAiApiKeyDavinciText;
            model = Model.DavinciText;
        }
        var api = new OpenAIAPI(key);
        var result =
            api.Completions.CreateAndFormatCompletion(new CompletionRequest(question, model: model, temperature: 0.1));
        var res = result.Result;
        Console.WriteLine(res);
        return res;
       
    }
}