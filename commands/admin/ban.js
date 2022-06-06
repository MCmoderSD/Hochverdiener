const { Client, Message } = require('discord.js');


module.exports = {
    name: 'ban',
    aliases: ['banhammer'],

       execute(client, message) {

        if(message.mentions.members){
            message.mentions.members.forEach(member => {
//                member.ban() //ähnlicher error wie beim !kick
                console.log(`${member.user.tag} was banned by ${message.author.tag}`);

            });
        }
        message.delete();
    },
};