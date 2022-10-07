module.exports = {
    name: 'shuffle',
    description: 'Shuffled die Queue',
    voiceChannel: true,
    blacklist: false,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Derzeit läuft doch gar kein Song ❌`, ephemeral: true }),
            console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the shuffle command`);

        if (!queue.tracks[0]) return inter.reply({ content: `Dikka ${inter.member} nach dem Song ist Ende Gelände! ❌`, ephemeral: true });

        await queue.shuffle();

        return inter.reply({ content:`Ok **${queue.tracks.length}** song(s) wurden geshuffled! ✅`});
    },
};