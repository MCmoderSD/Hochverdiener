module.exports = {
    name: 'pause',
    description: 'Pausiert den Song',
    voiceChannel: true,
    blacklist: false,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Derzeit läuft doch gar kein Song ❌`, ephemeral: true }),
            console.log(`No music currently playing ${inter.member}`);
        
        if(queue.connection.paused) return inter.reply({content: `So hab den Song **${queue.current.title}** Pausiert`, ephemeral: true})

        if(queue.connection.paused) return inter.reply({content: `**Dikka was willst du???** Der Song ist doch Pausiert ❌`, ephemeral: true},
            console.log(`The song is already paused ${inter.member}`));

        const success = queue.setPaused(true);
        
        return inter.reply({ content: success ? `So der Song **${queue.current.title}** ist pausiert ✅` : `Irgendwas lief da schief ${inter.member} Ka versuchs nochmal ❌` });
    },
};
