const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'remove',
    description: "remove a song from the queue",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'the name/url of the track you want to remove',
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
        const number =  inter.options.getNumber('number')
        const track = inter.options.getString('song');

        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Derzeit läuft doch gar kein Song ❌`, ephemeral: true }),
            console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the remove command`);
        if (!track && !number) inter.reply({ content: `Du musst schon sagen was du löschen willst **DU KEK!** ❌`, ephemeral: true }),
        console.log(`The user ${inter.member.user.username} didn't use any of the options when trying to use the remove command in the server ${inter.guild.name}`);

        if (track) {

        for (let song of queue.tracks) {
            if (song.title === track || song.url === track ) {
                queue.remove(song)
                return inter.reply({ content: `So hab ${track} von der Playlist gelöscht ✅` });
            }

        }

        return inter.reply({ content: `Konnte ${track} ${inter.member} nicht finden, veruchs mit dem vollen Namen oder nem Link ❌`, ephemeral: true });
        }

        if (number) {

            const index = number - 1
            const trackname = queue.tracks[index].title

            if (!trackname) return inter.reply({ content: `So wie es aussieht gibt es den nicht ❌`, ephemeral: true });

            queue.remove(index);
            
            return inter.reply({ content: `So hab ${trackname} on der Playlist gelöscht ✅` });
        }
    }
}