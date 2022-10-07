const { ApplicationCommandOptionType } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'playnext',
    description: "song you want to playnext",
    voiceChannel: true,
    blacklist: false,
    options: [
        {
            name: 'song',
            description: 'Der Song den du als nächstes hören willst',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    async execute({ inter }) { 
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Derzeit läuft doch gar kein Song ❌`, ephemeral: true }),
            console.log(`No music currently playing ${inter.member}`);

        const song = inter.options.getString('song');

        const res = await player.search(song, {
            requestedBy: inter.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return inter.reply({ content: `Ka ich finde den net ❌`, ephemeral: true }),
            console.log(`No results found ${inter.member}`);

       if (res.playlist) return inter.reply({ content: `Junge der command ist nicht für Playlists ❌`, ephemeral: true }),
           console.log(`This command dose not support playlist's ${inter.member}`);

        queue.insert(res.tracks[0], 0)

        await inter.reply({ content:`So der Song läuft als nächstes 🎧`});

    }
}