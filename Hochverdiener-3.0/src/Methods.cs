using Discord.WebSocket;

namespace Hochverdiener_3._0;

public class Methods
{
    public static string ReplyToUserTag(SocketSlashCommand command)
    {
        return "@" + command.User;
    }
}