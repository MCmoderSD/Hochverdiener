var insults;

module.exports = {
    name: 'fact',
    aliases: ['fakt'],
    
    
    
    execute(client, message) {

        var list1 = ["10%", "30%", "20%", "99%", "5 von 10 befragten", "60%", "70%", "75%","420%", "69%","3 von 99 Befragten", "0%", "100%", "42%", "38%", "93%", "47%", "94%", "29%", "48%", "Niemand","39%","3%","2%", "77%","2 von 3 Befragten","9 von 10 Befragten","85 von 898 Befragten","83 von 10 Befragen", "23%", "Alle"];
        var list2 = ["aller Menschen ", "aller Befragten","aller Kinder","aller 10 -jährigen","aller Hunde","aller Bundesagenten","aller Streamer","aller Twichzuschauer","aller Orang Utans","aller Götter","aller Baggerfahrer","aller Deutschen","aller Kokser","aller Kindergärtner","aller Parteichefs","aller Chinesen","aller Mücken","aller Viecher","aller Viewer gerade","aller Arschlöcher","aller Coronaleugner","aller Kleinkinder","aller Obstverkäufer","aller Paketboten","aller Jans","aller Händler","aller Radfahrer","aller  Autofahrer","aller Piloten","aller Dealer","aller Kinder",]
        var list3 = ["haben ", "besitzen","essen","kotzen","wichsen","pupsen","kacken","schaukeln","fallen","löschen","kaufen","ignorieren","koksen","trinken","finden","treffen","fahren","schlafen","gehen","steuern","machen","spielen","rauchen","kiffen","zocken","entführen","zählen","riechen","machen","fühlen","schlagen",]
        var list4 = ["selten", "häufig","ab und zu","jeden Montag","jeden Freitag","jeden 3. Vollmond","an jedem 4. des Monats","alle 3 Tage","immer","nie","gelegentlich","alle 7 Stunden","nicht oft","manchmal","normalerweise","regelmäßig","für gewöhnlich","um 3 Uhr Nachts","um 6 Uhr Vormittags","keine","am ersten Dienstag des Monats","am ersten Donnerstag der Woche","am vorletzten Mittwoch","jeden 9. Samstag","alle 187 Tage","alle 2 Jahre ","jeden 4. Sommer","komische","jedes mal","relativ selten","niemals",]
        var list5 = ["schlagende", "übergewichtige","magersüchtige","grundlos","geruchlose","betrunkene","grüne","orangene","koksende","verwirrte","observierende","besoffene","korrupte","nervige","kleine","sich wiederholende","unheimliche","juckende","störende","kuriose","süchtige","pupsende","besondere","weiche","harte","salzige","aktive","unmögliche","unkreative","zufällige",]
        var list6 = ["Kinder", "Inder","Rinder","Piloten","Konsolen","Computer","Schokolade","Arme","Beine","Gehirne","Pflanzen","Eier","Säcke","Kunden","Rundungen","Brüste","Kassierer","Männer","Vögel","Schokoladenfondeubrunnen","Kekse","Oberleitungen","Hunde","Katzen","Anzüge","Senioren","Stühle","Xylophone","Klaviere","Kondome","Kiffer",]
        
        
        function getRandom(list)
        return list[Math.floor(Math.random() * list.length)]
        
        
        message.channel.send(`${getRandom.list1}`)

    }
}


