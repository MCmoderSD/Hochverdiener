const { Client, Message } = require('discord.js');


module.exports = {
    name: 'kick',
//    aliases: [''],

       execute(client, message) {

        if(message.mentions.members){
            message.mentions.members.forEach(member => {
               member.kick();  //geht irgendwie nicht ka irgendwas mit permission
                console.log(`${member.user.tag} was kicked by ${message.author.tag}`);

            });
        }
        message.delete();
    },
};