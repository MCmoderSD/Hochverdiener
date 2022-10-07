const random = require('random');
const { ApplicationCommandOptionType } = require("discord.js");
module.exports = {
    name: 'iq',
    description: 'Ich mach n IQ Test',
    voiceChannel: false,
    blacklist: true,
    options: [
        {
        name: 'user',
        description: 'User für den du den IQ testen soll',
        type: ApplicationCommandOptionType.User,
        required: false,
    }
    ],

    async execute({ inter }) {
        let user = inter.options.getUser('user') || inter.user;
        let iq = random.int(-10, 212);
        inter.reply(`${user} hat einen IQ von ${iq}`);
    },
};