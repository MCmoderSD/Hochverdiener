const { Client, Message } = require('discord.js');
const random = require('random');


module.exports = {
    name: 'sexistscore',
    aliases: ['sexist'],

       execute(client, message) {

        if(message.mentions.members.first()){

            let score = random.int(0, 100);

        message.reply(`hat heute einen Sexistscore von ${score}`)

        }



    },
};