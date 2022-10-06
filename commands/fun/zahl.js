const { Client, Message } = require('discord.js');
const random = require('random');


module.exports = {
    name: 'zahl',
    description: 'Ich errate an welche zahl du gedacht hast',
    voiceChannel: false,
    blacklist: false,

    async execute({ inter }) {
        let zahl = random.int(1, 10);
        inter.channel.send(`${inter.member} denk an eine Zahl zwischen 1-10`);
        setTimeout(function() {inter.channel.send(`Bereit?`); },1500)
        setTimeout(function() {inter.channel.send(`Ok gut lass mich kurz nachdenken`); },4500)
        setTimeout(function() {inter.channel.send(`${inter.member} hat an ${zahl} gedacht`); },10000)
        setTimeout(function() {inter.channel.send(`und wer behauptet dass ich falsch liege ist n Homo`); },15000)
    },
};

