const { dumm } = require('../../config.js');

module.exports = {
    name: 'back',
    description: "Wieder zurück zum vorherigen Song",
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: dumm, ephemeral: true }),
            console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the back command`);

        if (!queue.previousTracks[1]) return inter.reply({ content: dumm, ephemeral: true }),
            console.log(inter.member.user.tag + ' tried to use the back command but there was no music played before');

        await queue.back();

        inter.reply({ content:`Playing the **previous** track ✅`});
    },
};