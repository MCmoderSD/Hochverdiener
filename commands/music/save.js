module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Geht nicht! ist ${message.author} dumm? ❌`);

        message.author.send(` **${queue.current.title}** | ${queue.current.author} from the server ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Hab dir den link privat geschickt! ✅`);
        }).catch(error => {
            message.channel.send(`Geht nicht! ist ${message.author} dumm? ❌`);
        });
    },
};