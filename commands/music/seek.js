const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Geht nicht! ist ${message.author} dumm? ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`Dikka der timer ist länger als der Song wie soll das denn bitte gehen? ${message.author} ❌`);

        await queue.seek(timeToMS);

        message.channel.send(`Ich bin dann mal nach **${ms(timeToMS, { long: true })}** raus ✅`);
    },
};