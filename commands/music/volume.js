const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Geht nicht! ist ${message.author} dumm? ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Lautstärke ist bei ${queue.volume} 🔊\n*Wenn du dein Trommelfell stärker zerficken willst, dann schreib ne Zehl zwischen **1** and **${maxVol}**rein.*`);

        if (queue.volume === vol) return message.channel.send(`WOW TOLL GEMACHT ${message.author} genau so laut wie vorher KNEK ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`Junge sooo laut gehts dann auch wieder nicht ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Lautstärke ist jetzt bei **${vol}**/**${maxVol}**% 🔊` : `Geht nicht! ist ${message.author} dumm? ❌`);
    },
};