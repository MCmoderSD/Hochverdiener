module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Geht nicht! ist ${message.author} dumm? ❌`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Ok spiele **${queue.current.title}** weiter ✅` : `Geht nicht! ist ${message.author} dumm? ❌`);
    },
};