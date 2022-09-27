const ms = require('ms');

module.exports = {
    name: 'ping',
    description: "Get the ping of the bot!",
    async execute({ client, inter }) {

        const m = await inter.reply("Ping?")
        inter.editReply(`Derzeit hab mit meinem Hochverdiener Internet einen Ping von -**${client.ws.ping}ms** zu deiner Mudder!`)

    },
};