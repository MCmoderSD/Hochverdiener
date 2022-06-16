module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Geht nicht! ist ${message.author} dumm? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`Geht nicht! ist ${message.author} dumm? ❌`);

        await queue.back();

        message.channel.send(`Spiele den Song davor nochmal ✅`);
    },
};