const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'queue',
    description: 'Get the songs in the queue',
    voiceChannel: true,

    execute({ client, inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Derzeit läuft doch gar kein Song ❌`, ephemeral: true }),
            console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the queue command`);

        if (!queue.tracks[0]) return  inter.reply({ content: `Nach dem Song ist Ende Gelände, **du KEK** ❌`, ephemeral: true }),
            console.log(`There was no music in the queue after the current one in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the queue command`);

        const methods = ['', '🔁', '🔂'];

        const songs = queue.tracks.length;

        const nextSongs = songs > 5 ? `und **${songs - 5}** weitere Song(s)...` : `In der Playlist sind noch **${songs}** Songs(s)...`;

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`)

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setThumbnail(inter.guild.iconURL({ size: 2048, dynamic: true }))
        .setAuthor({name: `Server queue - ${inter.guild.name} ${methods[queue.repeatMode]}`, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
        .setDescription(`Derzeit läuft: **${queue.current.title}**\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`)
        .setTimestamp()
//      .setFooter({ text: 'Music comes first - Made with heart by Zerio ❤️', iconURL: inter.member.avatarURL({ dynamic: true })})

        inter.reply({ embeds: [embed] });
    },
};