const { memberNicknameMention } = require("@discordjs/builders");
const { Message, Client } = require("discord.js");
const { userInfo } = require("os");
const random = require('random');

module.exports = {
    name: 'sexistscore',
    descriiption: 'zeigt an wie sexistisch ein user ist',
    aliases: [],
    
     /**
      * 
      * @param {Client} bot 
      * @param {Message} message 
      * @param {String[]} parts 
      * @param {String} prefix 
      */
    
    async execute(bot, message, parts, prefix) {


        if(message.mentions.members.first());





     
    }
}