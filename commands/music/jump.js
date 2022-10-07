const { ApplicationCommandOptionType } = require('discord.js');
const { dumm } = require('../../config.js');
module.exports = {
    name: 'jump',
    description: "Springt zur angegebenen Stelle in der Playlist",
    voiceChannel: true,
    blacklist: false,
    options: [
        {
            name: 'song',
            description: 'the name/url of the track you want to jump to',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'number',
            description: 'the place in the queue the song is in',
            type: ApplicationCommandOptionType.Number,
            required: false,
        }
    ],

    async execute({ inter }) { 
        const track = inter.options.getString('song');
        const number =  inter.options.getNumber('number')

        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: dumm, ephemeral: true }),
            console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the jump command`);
        if (!track && !number) inter.reply({ content: `Soll ich jetzt zu einem Song springen oder zu einer Nummer? Du **Intelligenzallergiker!** ❌`, ephemeral: true }),
            console.log(inter.member.user.tag + ' tried to use the jump command but did not provide a song or a number');

            if (track) {
        for (let song of queue.tracks) {
            if (song.title === track || song.url === track ) {
                queue.skipTo(song)
                return inter.reply({ content: `So hab zu **${track}** geskippt ✅` });
            }
        }
        return inter.reply({ content: `Ka wo der song **${track}** sein soll **${inter.member}**? ❌`, ephemeral: true }),
            console.log(inter.member.user.tag + ' tried to use the jump command but could not find the song');
    }
    if (number) {
        const index = number - 1
        const trackname = queue.tracks[index].title
        if (!trackname) return inter.reply({ content: `Also ich find kein Song in der Playlist der so heißen soll ❌`, ephemeral: true }),
            console.log(inter.member.user.tag + ' tried to use the jump command but song does not exist');
        queue.skipTo(index);
        return inter.reply({ content: `Jumped to ${trackname}  ✅` });
    }
         
    }
}