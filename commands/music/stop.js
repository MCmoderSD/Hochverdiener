module.exports = {
    name: 'stop',
    aliases: ['dc'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Dikka ist ${message.author} dumm? Ich bin doch nichtmal hier! ❌`);

        queue.destroy();

        message.channel.send(`Ok gut **FICK DICH** dann bin ich halt weg ✅`);
    },
};