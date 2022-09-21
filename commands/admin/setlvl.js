const { Client, Message } = require('discord.js');
const { fs } = require('fs');


module.exports = {
    name: 'setlvl',
    aliases: ['a'],
    execute(client, message) {
        if(message.member.roles.cache.some(role => role.name === 'Developer')) {
            message.mentions.members.forEach(member => {

                    for(let i = 0; i < 100; i++) {
                        let role = message.guild.roles.cache.find(role => role.name === 'lvl.' + i);
                        if(role)
                        member.roles.remove(role);
                    }
                member.roles.add(message.guild.roles.cache.find(role => role.name === 'lvl.' + message.content.split(' ')[2]));

                    message.channel.send("Added safety lvl " + message.content.split(' ')[2] + " to " + member.user.tag);
            })
        }
        message.delete();
    },
};