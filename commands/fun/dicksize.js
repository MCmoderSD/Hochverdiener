const random = require('random');
var dicknames = ['Dick', 'Schwanz', 'Schlauch', 'Gartenschlauch', 'Rohr', 'Stahlrohr', 'Aubergine', '🍆', 'Lulu', 'Cöck', 'Glied', 'männliches Geschlechtsorgan', 'Phallus', 'Schniepel', 'Zumpferl', 'Johannes', 'Jonny', 'Latte', 'Lümmel', 'Nudel', 'Spatz', 'Zipfel', 'Gurke', 'Knüppel', 'Kolben', 'Pfeife', 'Pinsel', 'Prügel', 'Riemen', 'Rüssel', 'Rute', 'Zauberstab', 'Wunderhorn', 'Schniedelwutz', 'Pimmel', 'kleiner Mann', 'Dödel' ];

function getRandom(list) {
    return getRandom[Math.floor(Math.random() * list.length)];
}

module.exports = {
    name: 'dicksize',
    aliases: ['schwanz', 'schwanzlänge', 'cock', 'penis', 'penislänge', 'dick'],

       execute(client, message) {

        var dicknames = ['Dick', 'Schwanz', 'Schlauch', 'Gartenschlauch', 'Rohr', 'Stahlrohr', 'Aubergine', '🍆', 'Lulu', 'Cöck', 'Glied', 'männliches Geschlechtsorgan', 'Phallus', 'Schniepel', 'Zumpferl', 'Johannes', 'Jonny', 'Latte', 'Lümmel', 'Nudel', 'Spatz', 'Zipfel', 'Gurke', 'Knüppel', 'Kolben', 'Pfeife', 'Pinsel', 'Prügel', 'Riemen', 'Rüssel', 'Rute', 'Zauberstab', 'Wunderhorn', 'Schniedelwutz', 'Pimmel', 'kleiner Mann', 'Dödel' ];

        function getRandom(list) {
            return list[Math.floor(Math.random() * list.length)];
        }

        let länge = random.int(-3, 32);
        let breite = random.int(1, 7);

        if(message.mentions.members.first()){                
            message.channel.send(`${message.mentions.members.first()}'s ${getRandom(dicknames)} ist ${länge}cm lang und ${breite}cm breit 🍆`)

        } else {  
            message.channel.send(`${message.author}'s ${getRandom(dicknames)} ist ${länge}cm lang und ${breite}cm breit 🍆`)
        }
    },
};