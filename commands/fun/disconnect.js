const { Client, Message } = require('discord.js');


module.exports = {
    name: 'disconnect',
    aliases: ['bye'],

       execute(client, message) {

        if(message.mentions.members.first()){

            message.mentions.members.first().voice.disconnect();
            console.log(`${message.mentions.members.first().displayname} was disconnected`)
        }
        message.delete();
    },
};