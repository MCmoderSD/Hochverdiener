const fs = require('fs');

var insults;

module.exports = {
    name: 'beleidigen',
    aliases: ['homo', 'insult', 'beileidige'],
    lvl: 2,
    execute(client, message) {

        const fileName = 'insult';
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            insults = data.split('\n')
            if(message.toString().includes('<@')){
            if(message.mentions.members)
                message.mentions.members.forEach(member => {

                    message.channel.send(insults[Math.floor(Math.random() * insults.length)].replaceAll("%member%", "<@" + member.id + ">"));
                });
            } else {
                message.guild.members.fetch()
                    .then(allMembers => {
                        const member = allMembers.random();
                        message.channel.send(insults[Math.floor(Math.random() * insults.length)].replaceAll("%member%", "<@" + member.id + ">"));
                    });

            }
        });
        message.delete();
    },
};