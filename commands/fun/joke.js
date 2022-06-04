const fs = require('fs');

var insults;

module.exports = {
    name: 'joke',
    aliases: ['j'],

    execute(client, message) {
        const fileName = 'jokes';
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            insults = data.split('\n')
            if(message.mentions.members)
                message.mentions.members.forEach(member => {

                    message.channel.send(insults[Math.floor(Math.random() * insults.length)]);
                });
        });
    },
};


