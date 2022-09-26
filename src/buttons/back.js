const { dumm } = require('../../config.js');

module.exports = async ({  inter, queue }) => {
    if (!queue || !queue.playing) return inter.reply({ content: dumm, ephemeral: true }),
        console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the back button`);

    if (!queue.previousTracks[1]) return inter.reply({ content: dumm, ephemeral: true }),
        console.log(inter.member.user.tag + ' tried to use the back command but there was no previous track');

    await queue.back();

    inter.reply({ content:`Spiele den Song davor nochmal ✅`, ephemeral: true});
}
