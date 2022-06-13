const random = require('random');

module.exports = {
    name: 'iq',
    aliases: ['intelligenz', 'intelligenz-quotient'],

    execute(client, message) {
        let iq = random.int(-10, 212);
        if(message.mentions.members.first()) message.channel.send(`${message.mentions.members.first().displayName} hat heute einen IQ von ${iq}`)
         else message.channel.send(`${message.author.displayName} hat heute einen IQ von ${iq}`);

    },
};