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
- ChatGPT integration **[ALMOST DONE!!!]**
- Music
## Installation
If you want to host your own bot you need to perform the following steps:
1. Clone the repository into a IDE that supports C# and [.NET 7.0](https://dotnet.microsoft.com/en-us/download/dotnet/7.0) I recommend [JetBrains Rider](https://www.jetbrains.com/rider/).
2. Create a folder called **keys** in the root directory of the project.
3. in the **keys** folder create C# class called **Keys.cs** and paste your bot token in it. For the OpenAI API Key you need to create an account on [OpenAI](https://openai.com/) and create a new API Key. And you need to create a YouTube API Key. [Click Here](https://developers.google.com/youtube/v3/getting-started) for more information.
4. in the class add the following code:
```csharp
namespace Hochverdiener.keys;

public class Keys
{
    // OpenAI API Key:
    public static readonly string OpenAiApiKey = "YOUR_API_KEY";
    // OpenAI API Key Configurations:
    public static readonly string OpenAiApiKeyAda = OpenAiApiKey;
    public static readonly string OpenAiApiKeyBabbage = OpenAiApiKey;
    public static readonly string OpenAiApiKeyCurie = OpenAiApiKey;
    public static readonly string OpenAiApiKeyDavinci = OpenAiApiKey;
    
    // Discord Tokens:
    public static readonly string hochverdienerToken = "PUT_YOUR_BOT_TOKEN_HERE";
    public static readonly string testBotBenToken = "PUT_YOUR_BOT_TOKEN_HERE";
    public static readonly string testBotBenCSharpToken = "PUT_YOUR_BOT_TOKEN_HERE";
    
    
    // YouTube API Key:
    public static readonly string YouTubeApiKey = "YOUR_API_KEY";
}
```
5. Make sure to replace the ``PUT_YOUR_BOT_TOKEN_HERE`` with your bot token.
6. Run the project and the bot should be online.
7. For the logging feature to work you have to write the **full file path** where the logs should be stored as argument when starting the bot. Example: <br>`` $ ./Hochverdiener.exe C:\Users\Username\Hochverdiener\logs\ ``<br> The folder will be created if it doesn't exist.
8. The exe and dll  files are located in the bin folder of the project.

If you want you can create own Commands inside the **Commands** folder.<br>
To enable them you need to add them at the bottom of **BaseCommand.cs** which is located in the **Commands** folder.<br>
```csharp
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
    }
    public static void InitMusicCommands()
    {
        new Play().Register();
    }
```