module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    execute: async function (client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Geht nicht! ist ${message.author} dumm? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Dikka ${message.author} nach dem Song ist Ende Gelände! ❌`);

        await queue.shuffle();


        return message.channel.send(`Ok **${queue.tracks.length}** song(s) wurden geshuffled! ✅`);
    },
};