module.exports = {
    name: 'stop',
    description: 'Stoppt alles',
    voiceChannel: true,
    blacklist: false,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content:`**Dikka** was willst du??? Ich bin nichtmal hier?`, ephemeral: true }),
            console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the stop command`);

        queue.destroy();

        inter.reply({ content: `Ok gut **FICK DICH** dann bin ich halt weg ✅`});
    },
};