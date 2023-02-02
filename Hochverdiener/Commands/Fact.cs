﻿using Discord.WebSocket;
using Hochverdiener;

namespace Hochverdiener.Commands;

public class Fact : BaseCommand
{
    public Fact() : base(
        name: "Fact", 
        aliases: null, 
        description: "Ich gebe dir ein random Fakt",
        options: null, 
        permission: null)
    {
        
    }
    
    public override Task Execute(SocketSlashCommand command)
    {
        command.RespondAsync(BuildFact());
        return base.Execute(command);
    }

    private string BuildFact()
    {
        string[] array1 =
        {
            "10%", "30%", "20%", "99%", "5 von 10 befragten", "60%", "70%", "75%", "420%", "69%", "3 von 99 Befragten",
            "0%", "100%", "42%", "38%", "93%", "47%", "94%", "29%", "48%", "Niemand", "39%", "3%", "2%", "77%",
            "2 von 3 Befragten", "9 von 10 Befragten", "85 von 898 Befragten", "83 von 10 Befragen", "23%", "Alle"
        };
        string[] array2 =
        {
            "aller Menschen ", "aller Befragten", "aller Kinder", "aller 10 -jährigen", "aller Hunde",
            "aller Bundesagenten", "aller Streamer", "aller Twichzuschauer", "aller Orang Utans", "aller Götter",
            "aller Baggerfahrer", "aller Deutschen", "aller Kokser", "aller Kindergärtner", "aller Parteichefs",
            "aller Chinesen", "aller Mücken", "aller Viecher", "aller Viewer gerade", "aller Arschlöcher",
            "aller Coronaleugner", "aller Kleinkinder", "aller Obstverkäufer", "aller Paketboten", "aller Jans",
            "aller Händler", "aller Radfahrer", "aller  Autofahrer", "aller Piloten", "aller Dealer", "aller Kinder"
        };
        string[] array3 =
        {
            "haben ", "besitzen", "essen", "kotzen", "wichsen", "pupsen", "kacken", "schaukeln", "fallen", "löschen",
            "kaufen", "ignorieren", "koksen", "trinken", "finden", "treffen", "fahren", "schlafen", "gehen", "steuern",
            "machen", "spielen", "rauchen", "kiffen", "zocken", "entführen", "zählen", "riechen", "machen", "fühlen",
            "schlagen"
        };
        string[] array4 =
        {
            "selten", "häufig", "ab und zu", "jeden Montag", "jeden Freitag", "jeden 3. Vollmond",
            "an jedem 4. des Monats", "alle 3 Tage", "immer", "nie", "gelegentlich", "alle 7 Stunden", "nicht oft",
            "manchmal", "normalerweise", "regelmäßig", "für gewöhnlich", "um 3 Uhr Nachts", "um 6 Uhr Vormittags",
            "keine", "am ersten Dienstag des Monats", "am ersten Donnerstag der Woche", "am vorletzten Mittwoch",
            "jeden 9. Samstag", "alle 187 Tage", "alle 2 Jahre ", "jeden 4. Sommer", "komische", "jedes mal",
            "relativ selten", "niemals"
        };
        string[] array5 =
        {
            "schlagende", "übergewichtige", "magersüchtige", "grundlos", "geruchlose", "betrunkene", "grüne",
            "orangene", "koksende", "verwirrte", "observierende", "besoffene", "korrupte", "nervige", "kleine",
            "sich wiederholende", "unheimliche", "juckende", "störende", "kuriose", "süchtige", "pupsende", "besondere",
            "weiche", "harte", "salzige", "aktive", "unmögliche", "unkreative", "zufällige"
        };
        string[] array6 =
        {
            "Kinder", "Inder", "Rinder", "Piloten", "Konsolen", "Computer", "Schokolade", "Arme", "Beine", "Gehirne",
            "Pflanzen", "Eier", "Säcke", "Kunden", "Rundungen", "Brüste", "Kassierer", "Männer", "Vögel",
            "Schokoladenfondeubrunnen", "Kekse", "Oberleitungen", "Hunde", "Katzen", "Anzüge", "Senioren", "Stühle",
            "Xylophone", "Klaviere", "Kondome", "Kiffer"
        };
        Random random = new();
        string fact = array1[random.Next(0, array1.Length)] + " " + array2[random.Next(0, array2.Length)] + " " +
                      array3[random.Next(0, array3.Length)] + " " + array4[random.Next(0, array4.Length)] + " " +
                      array5[random.Next(0, array5.Length)] + " " + array6[random.Next(0, array6.Length)];
        return fact;
    }
}