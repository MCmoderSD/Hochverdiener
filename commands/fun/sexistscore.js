const random = require('random');


module.exports = {
    name: 'sexistscore',
    aliases: ['sexist'],

    execute(client, message) {
        let score = random.int(-10, 101);
        if(message.mentions.members.first()) message.channel.send(`${message.mentions.members.first().displayName} hat heute einen IQ von ${score}`)
         else message.channel.send(`${message.author.displayName} hat heute einen IQ von ${score}`);

    },
};