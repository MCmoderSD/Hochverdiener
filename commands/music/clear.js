module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Geht nicht! ist ${message.author} dumm? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Geht nicht! ist ${message.author} dumm? ❌`);

        await queue.clear();

        message.channel.send(`Fick dich hab die Playlist gelöscht 🗑️`);
    },
};