module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Geht nicht! ist ${message.author} dumm? ❌`);

        const success = queue.skip();

                return message.channel.send(success ? `Ok **${queue.current.title}** wird wie der Leg Day geskipped ✅` : `Geht nicht! ist ${message.author} dumm? ❌`);
    },
};