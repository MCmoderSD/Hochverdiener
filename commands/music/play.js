const { QueryType } = require('discord-player');
const { ApplicationCommandOptionType } = require('discord.js');
module.exports = {
    name: 'play',
    description: "Packt einen Song oder eine Playlist in die Warteschlange",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'the song you want to play',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    async execute({ inter }) {
        const song = inter.options.getString('song');
        const res = await player.search(song, {
            requestedBy: inter.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return inter.reply({ content: `Hab nix gefunden ${inter.member} ka versuchs nochmal ❌`, ephemeral: true }),
            console.log(`No results found ${inter.member}`);

        const queue = await player.createQueue(inter.guild, {
            metadata: inter.channel,
            spotifyBridge: client.config.opt.spotifyBridge,
            initialVolume: client.config.opt.defaultvolume,
            leaveOnEnd: client.config.opt.leaveOnEnd
        });

        try {
            if (!queue.connection) await queue.connect(inter.member.voice.channel);
        } catch {
            await player.deleteQueue(inter.guildId);
            return inter.reply({ content: `Sorry, aber Geringverdiener wie ${inter.member} können ich mich nicht anwerben ❌`, ephemeral: true}),
                console.log(`I can't join the voice channel ${inter.member}`);
        }

       await inter.reply({ content:`So ich suche ${res.playlist ? 'deine Playlist raus' : 'dein Song raus' } 🎧`});

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};