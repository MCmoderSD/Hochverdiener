using System.Text;
using Discord;
using Discord.WebSocket;
using Newtonsoft.Json;
using System.Text.Json;
using Hochverdiener.keys;
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

    private string AskChatGPT(string? question)
    {
        using (var client = new HttpClient())
        {
            client.DefaultRequestHeaders.Add("Authorization", "Bearer " + OpenAI_API_Keys.OpenAiApiKey);
            var content = new StringContent(JsonSerializer.Serialize(new { prompt = question }), Encoding.UTF8, "application/json");
            var response = client.PostAsync("https://api.openai.com/v1/engines/text-davinci/jobs", content).Result;
            return response.Content.ReadAsStringAsync().Result;
        }
    }
}