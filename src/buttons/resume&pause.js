module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Derzeit läuft doch gar kein Song ❌`, ephemeral: true }),
        console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the resume command`);

    const success = queue.setPaused(false);
    
    if (!success) queue.setPaused(true);
    

    return inter.reply({ content: `${success ? `So **${queue.current.title}** wird wiedergegeben ✅` : `So **${queue.current.title}** wird Pausiert ✅`}`, ephemeral: true});
}