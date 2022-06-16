const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',
/*
    execute(client, message) {
        message.channel.send(`Ich hatte vor ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} mit dem Bittenfelder Internet noch einen Ping von**${client.ws.ping}ms** zu deiner Mudder!`);
    },
}; 

*/

    execute(client, message) {
        message.channel.send(`Derzeit hab mit meinem Hochverdiener Internet einen Ping von -**${client.ws.ping}ms** zu deiner Mudder!`);
    },
};