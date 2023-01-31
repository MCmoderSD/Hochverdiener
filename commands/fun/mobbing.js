const fs = require('fs');
const random = require('random');
const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: 'mobbing',
    description: 'Mobbt jemanden',
    voiceChannel: false,
    blacklist: false,
    options: [
        {
            name: 'user',
            description: 'Wer wird das Opfer',
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
            let user = inter.options.getUser('user');
            inter.user.getUser.send(insults[Math.floor(Math.random() * insults.length)].replaceAll("%member%", user));
            console.log(`${inter.member.user.tag} wird gemobbt von ${inter.user.tag}`)
        });
    },
};