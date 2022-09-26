const maxVol = client.config.opt.maxVol;

module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Derzeit läuft doch gar kein Song ❌`, ephemeral: true }),
        console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the resume command`);

        const vol = Math.floor(queue.volume - 5)

        if (vol < 0 ) return inter.reply({ content: `**ALTER**, bei der lautstärke hört man doch nixmehr!`, ephemeral: true })
        
        if (queue.volume === vol) return inter.reply({ content: `Ja perfekt du Idiot **DES WAR DOCH SCHON EINGESTELLT!!!** ❌`, ephemeral: true });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `So lautstärke ist jetzt auf **${vol}**/**${maxVol}**% 🔊` : `Irgendwas lief da schief ${inter.member} Ka versuchs nochmal ❌`, ephemeral: true});
}