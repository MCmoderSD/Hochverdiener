const { Client, Message } = require('discord.js');
const random = require('random');


module.exports = {
    name: 'iq',
    aliases: ['intelligenz', 'intelligenz-quotient'],

       execute(client, message) {

        if(message.mentions.members.first()){

            let iq = random.int(-10, 212);

            message.channel.send(`${message.mentions.members.first()} hat heute einen IQ von ${iq}`)
        } else {

            let iq = random.int(-10, 212);

            message.channel.send(`${message.author} hat heute einen IQ von ${iq}`);
        }
    },
};