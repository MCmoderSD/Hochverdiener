const { Client, Message } = require('discord.js');
const random = require('random');


module.exports = {
    name: 'zahl',
    aliases: ['number'],



    execute(client, message) {
        let zahl = random.int(1, 10);
        message.channel.send(`${message.author} denk an eine Zahl zwischen 1-10`);
        setTimeout(function() {message.channel.send(`Bereit?`); },1500)
        setTimeout(function() {message.channel.send(`Ok gut lass mich kurz nachdenken`); },4500)
        setTimeout(function() {message.channel.send(`${message.author} hat an ${zahl} gedacht`); },10000)
        setTimeout(function() {message.channel.send(`Wer behauptet dass ich falsch liege ist n Homo`); },19000)
    },
};

