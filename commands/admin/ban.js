const { Client, Message } = require('discord.js');


module.exports = {
    name: 'ban',
    aliases: ['banhammer'],

       execute(client, message) {

        if(message.mentions.members){
            message.mentions.members.forEach(member => {
                member.ban({reason: 'Hochverdiener hatte kein Bockauf ihn'})
                console.log(`${member.user.tag} was banned by ${ban({reason: 'Hochverdiener hatte kein Bockauf ihn'})}, `);

            });
        }
        message.delete();
    },
};