const ms = require('ms');

module.exports = {
    name: 'ping',
    description: "Zeigt dir die Latenz des Bots an",
    blacklist: true,
    async execute({ client, inter }) {

        const m = await inter.reply("Ping?")
        inter.reply(`Derzeit hab mit meinem Hochverdiener Internet einen Ping von -**${client.ws.ping}ms** zu deiner Mudder!`)

    },
};