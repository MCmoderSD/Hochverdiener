module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `Derzeit läuft doch gar kein Song ❌`, ephemeral: true }),
        console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the resume command`);
    
    const success = queue.skip();

    return inter.reply({ content: success ? `**${queue.current.title}** wird wie der Leg Day geskipped ✅` : `Irgendwas lief da schief ${inter.member} Ka versuchs nochmal ❌`, ephemeral: true});
}