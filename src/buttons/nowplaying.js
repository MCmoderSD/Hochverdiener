const { EmbedBuilder } = require('discord.js');
module.exports = async ({ client, inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Derzeit läuft doch gar kein Song ❌`, ephemeral: true }),
        console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the loop button`);

    const track = queue.current;

    const methods = ['disabled', 'track', 'queue'];

    const timestamp = queue.getPlayerTimestamp();

    const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

    const progress = queue.createProgressBar();
    

    const embed = new EmbedBuilder()
    .setAuthor({ name: track.title,  iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
    .setThumbnail(track.thumbnail)
    .setDescription(`Volume **${queue.volume}**%\nLoop **${methods[queue.repeatMode]}**\nAngefragt von ${track.requestedBy}`)
    .setFooter({ text: `${track.title} angefragt von ${inter.member.user.tag}`, iconURL: inter.member.avatarURL({ dynamic: true })})
    .setColor('ff0000')
    .setTimestamp()

    inter.reply({ embeds: [embed], ephemeral: true });
}