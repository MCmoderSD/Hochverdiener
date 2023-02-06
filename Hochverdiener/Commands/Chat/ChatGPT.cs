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
        options: new[] {new SlashCommandOptionBuilder().WithName("question").WithDescription("Frage die du stellen willst").WithType(ApplicationCommandOptionType.String).WithRequired(true), new SlashCommandOptionBuilder().WithName("questionquality").WithDescription("Mit welcher meiner multiplen Persönlichenkeit möchtest du reden?").WithRequired(true).WithType(ApplicationCommandOptionType.String).AddChoice("Ada (Am Schnellsten)", "ada").AddChoice("Babbage", "babbage").AddChoice("Curie", "curie").AddChoice("Davinci (Am Schlausten)", "davinci")},
        permission: null)
    {
        
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
       
        var question = command.Data.Options.First().Value.ToString();
        command.RespondAsync(AskChatGPT(question,command.Data.Options.Last().Value.ToString()!));
        return base.Execute(command);
    }
    private static string AskChatGPT(string? question, string modelName)
    {
        //TODO: Conversations
        Model model;
        string key;
        switch (modelName)
        {
            case "babbage":
                key = Keys.OpenAiApiKeyBabbage;
                model = Model.BabbageText;
                break;
            case "curie":
                key = Keys.OpenAiApiKeyCurie;
                model = Model.CurieText;
                break;
            case "davinci":
                key = Keys.OpenAiApiKeyDavinci;
                model = Model.DavinciText;
                break;
            default: 
                key = Keys.OpenAiApiKeyAda;
                model = Model.AdaText;
                break;
        }
        var api = new OpenAIAPI(key);
        var result =
            api.Completions.CreateAndFormatCompletion(new CompletionRequest(question, model: model, temperature: 0.1));
        var res = result.Result;
        Console.WriteLine(res);
        return res;
       
    }
}