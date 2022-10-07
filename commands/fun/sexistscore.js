const random = require('random');
const { ApplicationCommandOptionType } = require("discord.js");
module.exports = {
    name: 'sexistscore',
    description: 'Ich schaue wie sexistisch jemand ist',
    voiceChannel: false,
    blacklist: true,
    options: [
        {
            name: 'user',
            description: 'von welchem User willst du den Sexist Score wissen willst',
            type: ApplicationCommandOptionType.User,
            required: false,
        }
    ],

    async execute({ inter }) {
        let score = random.int(-10, 101);
        let user = inter.options.getUser('user') || inter.user;
        inter.reply(`${user} hat heute einen Sexistscore von ${score}`);

    },
};