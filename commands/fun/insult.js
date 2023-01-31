const fs = require('fs');
require('random');
const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: 'insult',
    description: 'Beleidigt jemanden',
    voiceChannel: false,
    blacklist: false,
    options: [
        {
            name: 'user',
            description: 'Wen soll ich beleidigen?',
            type: ApplicationCommandOptionType.User,
            required: false,
        }
    ],

    async execute({ inter }) {

        const fileName = 'insult';
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            let insults = data.split('\n')
            let user = inter.options.getUser('user') || inter.user;
            inter.reply(insults[Math.floor(Math.random() * insults.length)].replaceAll("%member%", user));
        });
    },
};