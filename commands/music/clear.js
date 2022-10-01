const { dumm } = require('../../config.js');

module.exports = {
    name: 'clear',
    description: 'löscht die Playlist',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: dumm, ephemeral: true }),
            console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the clear command`);

        if (!queue.tracks[0]) return inter.reply({ content: dumm, ephemeral: true }),
            console.log(inter.member.user.tag + ' tried to use the clear command but there was no music in the queue');

        await queue.clear();

        inter.reply(`Fick dich! Jetzt hab ich die Playlist gelöscht 🗑️`);
    },
};