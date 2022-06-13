const { Client, Message } = require('discord.js');


module.exports = {
    name: 'ban',
    aliases: ['banhammer'],

       execute(client, message) {

        if(message.mentions.members){
            message.mentions.members.forEach(member => {
                let reason = 'Hochverdiener hatte kein Bockauf ihn'
                member.ban({reason: reason})
                console.log(`${member.user.tag} was banned by ${message.author.tag}, reason: ${reason}`);

            });
        }
        message.delete();
    },
};