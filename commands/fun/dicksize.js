const random = require('random');
const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: 'dicksize',
    description: 'ich sag dir wie lang dein schwanz ist',
    voiceChannel: false,
    options: [
        {
            name: 'user',
            description: 'Ich sag dir wie lang der Schwanz von einem User ist',
            type: ApplicationCommandOptionType.User,
            required: false,
        }
    ],

    async execute({ inter }) {

        function getRandom(list) {
            return list[Math.floor(Math.random() * list.length)];
        }

        let dickname = ['Dick', 'Schwanz', 'Schlauch', 'Gartenschlauch', 'Rohr', 'Stahlrohr', 'Aubergine', '🍆', 'Lulu', 'Cöck', 'Glied', 'männliches Geschlechtsorgan', 'Phallus', 'Schniepel', 'Zumpferl', 'Johannes', 'Jonny', 'Latte', 'Lümmel', 'Nudel', 'Spatz', 'Zipfel', 'Gurke', 'Knüppel', 'Kolben', 'Pfeife', 'Pinsel', 'Prügel', 'Riemen', 'Rüssel', 'Rute', 'Zauberstab', 'Wunderhorn', 'Schniedelwutz', 'Pimmel', 'kleiner Mann', 'Dödel'];

        let laenge = random.int(-3, 32);
            let breite = random.int(1, 7);

        let user = inter.options.getUser('user') || inter.user;
        inter.reply(`${user}'s ${getRandom(dickname)} ist ${laenge}cm lang und ${breite}cm breit 🍆`);
    },
};