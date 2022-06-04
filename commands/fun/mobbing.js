const fs = require('fs');

var insults;

module.exports = {
    name: 'mobbing',

    execute(client, message) {

        const fileName = 'insult';
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            insults = data.split('\n')
                if(message.mentions.members)
                    message.mentions.members.forEach(member => {
                       member.send(insults[Math.floor(Math.random() * insults.length)].replaceAll("%member%", "<@" + member.id + ">"));
                    });
        });
        message.delete();
    },
};


