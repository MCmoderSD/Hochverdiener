const random = require('random');
module.exports = {
    name: 'iq',
    description: 'Shows your iq',
    voiceChannel: false,

    async execute({ inter }) {
        let iq = random.int(-10, 212);
        inter.reply(`Du hast ${iq} IQ`);
    },
};