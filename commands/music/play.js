const { QueryType } = require('discord-player');
global.locked = false;

module.exports = {
    name: 'play',
    aliases: ['p'],
    utilisation: '{prefix}play [song name/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
        if(locked) return message.channel.send(`Geht nicht! ist ${message.author} dumm? ❌`);
        else
        if (!args[0]) return message.channel.send(`Geht nicht! ist ${message.author} dumm? ❌`);


        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`${message.author} ka finde des nicht ❌`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`Sorry, aber Geringverdiener wie ${message.author} können ich mich nicht anwerben ❌`);
        }

        await message.channel.send(`Lade gerade ${res.playlist ? 'playlist' : 'track'}... 🎧`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    }
};






