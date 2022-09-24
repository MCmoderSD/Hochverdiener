const fs = require('fs');

let insults;

module.exports = {
    name: 'joke',
    aliases: ['jokes', 'witz'],

    execute(client, message) {
        const fileName = 'jokes';
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            insults = data.split('\n')
            message.channel.send(insults[Math.floor(Math.random() * insults.length)]);
        });
    },
};