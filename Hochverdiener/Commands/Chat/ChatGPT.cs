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
        options: new[] {new SlashCommandOptionBuilder().WithName("question").WithDescription("Frage die du stellen willst").WithType(ApplicationCommandOptionType.String).WithRequired(true), new SlashCommandOptionBuilder().WithName("questionquality").WithDescription("Schnell generiert oder langsam aber besser").WithRequired(true).WithType(ApplicationCommandOptionType.String).AddChoice("Schnell", "ada").AddChoice("Langsam", "davinci")},
        permission: null)
    {
        
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        Model model = command.Data.Options.Last().Value.ToString() == "ada" ? Model.AdaText : Model.DavinciText;
        var question = command.Data.Options.First().Value.ToString();
        command.RespondAsync(AskChatGPT(question,model));
        return base.Execute(command);
    }
    private string AskChatGPT(string? question, Model model)
    {
        //TODO: Conversations
        string key;
        if(model == Model.AdaText)
            key = Keys.OpenAiApiKeyAdaText;
        else
            key = Keys.OpenAiApiKeyDavinciText;
        var api = new OpenAIAPI(key);
        var result =
            api.Completions.CreateAndFormatCompletion(new CompletionRequest(question, model: model, temperature: 0.1));
        var res = result.Result;
        Console.WriteLine(res);
        return res;
       
    }
}