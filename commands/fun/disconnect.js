const { Client, Message } = require('discord.js');


module.exports = {
    name: 'disconnect',
    aliases: ['bye'],

       execute(client, message) {

        if(message.mentions.members){
            message.mentions.members.forEach(member => {
               // let membername = member.displayName;
                //console.log(membername);
               member.voice.disconnect();
                console.log(`${member.user.tag} was disconnected by ${message.author.tag}`);

            });
        }
        message.delete();
    },
};
