module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Geht nicht! ist ${message.author} dumm? ❌`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Hab **${queue.current.title}** pausiert ✅` : `Ups irgendwas lief da falsch ${message.author} du KEK!❌`);
    },
};