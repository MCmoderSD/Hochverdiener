const fs = require('fs');

module.exports = {
    name: 'joke',
    description: 'Sends a random joke',
    voiceChannel: false,

    async execute({ inter }) {

        const fileName = 'jokes';
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            let jokes = data.split('\n')
            inter.reply(jokes[Math.floor(Math.random() * jokes.length)]);
        });
    },
};