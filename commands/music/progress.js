module.exports = {
    name: 'progress',
    aliases: ['pbar'],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Geht nicht! ist ${message.author} dumm? ❌`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`Ich spiel doch, WAS WILLST DU? ${message.author}`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};