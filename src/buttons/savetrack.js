const { EmbedBuilder } = require('discord.js')

module.exports = async ({ inter, queue }) => {
    if (!queue || !queue.playing) return inter.reply({ content: `Derzeit läuft doch gar kein Song ❌`, ephemeral: true }),
        console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the resume command`);

    inter.member.send({
        embeds: [
            new EmbedBuilder()
                .setColor('Red')
                .setTitle(`:arrow_forward: ${queue.current.title}`)
                .setURL(queue.current.url)
                .addFields(
                    { name: ':hourglass: Dauer:', value: `\`${queue.current.duration}\``, inline: true },
                    { name: 'Artist:', value: `\`${queue.current.author}\``, inline: true },
                    { name: 'Views :eyes:', value: `\`${Number(queue.current.views).toLocaleString()}\``, inline: true },
                    { name: 'Song URL:', value: `\`${queue.current.url}\`` }
                )
                .setThumbnail(queue.current.thumbnail)
                .setFooter({ text: `von ${inter.member.guild.name}`, iconURL: inter.member.guild.iconURL({ dynamic: false }) })
        ]
    }).then(() => {
        return inter.reply({ content: `So hab dir den Titel per Privat Nachricht geschickt ✅`, ephemeral: true });
    }).catch(error => {
        return inter.reply({ content: `Du **KEK!** ich kann dir keine Privat Nachrichten Schicken ❌`, ephemeral: true });
    });


}
