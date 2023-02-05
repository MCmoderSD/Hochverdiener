namespace Hochverdiener;

public class Logger
{
    static Logger instance;
    DirectoryInfo logDir;
    public Logger(DirectoryInfo logDir)
    {
        instance = this;
        this.logDir = logDir;
    }
    
    public static void Log(string message)
    {
        instance.LogMessage(message);
    }
    
    public void LogMessage(string message)
    {
        var logFile = new FileInfo(Path.Combine(logDir.FullName, DateTime.Now.ToString("yyyy-MM-dd") + ".log"));
        if (!logFile.Exists)
        {
            logFile.Create().Close();
        }
        using (var writer = new StreamWriter(logFile.FullName, true))
        {
            writer.WriteLine(DateTime.Now.ToString("HH:mm:ss") + " " + message);
        }
    }
}