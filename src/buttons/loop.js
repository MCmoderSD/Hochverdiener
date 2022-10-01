const { QueueRepeatMode } = require('discord-player');
module.exports = async ({  inter, queue }) => {

    const methods = ['disabled', 'track', 'queue'];

    if (!queue || !queue.playing) return inter.reply({ content: `Derzeit läuft doch gar kein Song ❌`, ephemeral: true }),
        console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the loop button`);

    const repeatMode = queue.repeatMode

    if (repeatMode === 0) queue.setRepeatMode( QueueRepeatMode.TRACK)

    if (repeatMode === 1 ) queue.setRepeatMode( QueueRepeatMode.QUEUE)

    if (repeatMode === 2) queue.setRepeatMode( QueueRepeatMode.OFF)
    
    return inter.reply({ content: `Loop Mode: ${methods[queue.repeatMode]}.✅`})



}