const random = require('random');

module.exports = {
    name: 'dicksize',
    aliases: ['schwanz', 'schwanzlänge', 'cock', 'penis', 'penislänge', 'dick'],

       execute(client, message) {

        if(message.mentions.members.first()){
            var dicknames = ['Dick', 'Schwanz', 'Schlauch', 'Gartenschlauch', 'Rohr', 'Stahlrohr', 'Aubergine', '🍆', 'Lulu', 'Cöck', 'Glied', 'männliches Geschlechtsorgan', 'Phallus', 'Schniepel', 'Zumpferl', 'Johannes', 'Jonny', 'Latte', 'Lümmel', 'Nudel', 'Spatz', 'Zipfel', 'Gurke', 'Knüppel', 'Kolben', 'Pfeife', 'Pinsel', 'Prügel', 'Riemen', 'Rüssel', 'Rute', 'Zauberstab', 'Wunderhorn', 'Schniedelwutz', 'Pimmel', 'kleiner Mann', 'Dödel' ];
                
            function dickword(dickname) {
                return dickname[Math.floor(Math.random() * dickname.length)];
            }
            
            for(var x=0; x<1; x++); 

            let länge = random.int(-3, 32);
            let breite = random.int(1, 7);
    
            message.channel.send(`${message.mentions.members.first()}'s ${dickword(dicknames)} ist ${länge}cm lang und ${breite}cm breit 🍆`)

        } else {
            var dicknames = ['Dick', 'Schwanz', 'Schlauch', 'Gartenschlauch', 'Rohr', 'Stahlrohr', 'Aubergine', '🍆', 'Lulu', 'Cöck', 'Glied', 'männliches Geschlechtsorgan', 'Phallus', 'Schniepel', 'Zumpferl', 'Johannes', 'Jonny', 'Latte', 'Lümmel', 'Nudel', 'Spatz', 'Zipfel', 'Gurke', 'Knüppel', 'Kolben', 'Pfeife', 'Pinsel', 'Prügel', 'Riemen', 'Rüssel', 'Rute', 'Zauberstab', 'Wunderhorn', 'Schniedelwutz', 'Pimmel', 'kleiner Mann', 'Dödel' ];
                
            function dickword(dickname) {
                return dickname[Math.floor(Math.random() * dickname.length)];
            }
            
            for(var x=0; x<1; x++); 

            let länge = random.int(-3, 32);
            let breite = random.int(1, 7);
    
            message.channel.send(`${message.author}'s ${dickword(dicknames)} ist ${länge}cm lang und ${breite}cm breit 🍆`)
        }
    },
};
