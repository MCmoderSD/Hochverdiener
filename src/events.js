const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');

player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    const embed = new EmbedBuilder()
    .setAuthor({name: `Derzeit läuft ${track.title} im ${queue.connection.channel.name} Channel`, iconURL: track.requestedBy.avatarURL()})
    .setColor('#13f857')

    const back = new ButtonBuilder()
    .setLabel('Back')
    .setCustomId(JSON.stringify({ffb: 'back'}))
    .setStyle('Primary')

    const skip = new ButtonBuilder()
    .setLabel('Skip')
    .setCustomId(JSON.stringify({ffb: 'skip'}))
    .setStyle('Primary')

    const resumepause = new ButtonBuilder()
    .setLabel('Resume & Pause')
    .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
    .setStyle('Danger')

    const loop = new ButtonBuilder()
    .setLabel('Loop')
    .setCustomId(JSON.stringify({ffb: 'loop'}))
    .setStyle('Secondary')
    
    const queuebutton = new ButtonBuilder()
    .setLabel('Queue')
    .setCustomId(JSON.stringify({ffb: 'queue'}))
    .setStyle('Secondary')

    const row1 = new ActionRowBuilder().addComponents(back, loop, resumepause, queuebutton, skip)
    queue.metadata.send({ embeds: [embed], components: [row1] })
});

player.on('trackAdd', (queue, track) => {
   
    queue.metadata.send(`Ich hab den Song **${track.title}** zur Playlist hinzugefügt ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Welcher **KNEK** hat mich disconnected???');
    console.log('Bot was disconnected from the voice channel');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('So bin fertig **FICKT EUCH** bin weg ✅');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('So bin fertig **FICKT EUCH bin weg** ✅');
});

player.on('tracksAdd', (queue, tracks) => {
    queue.metadata.send(`Alle Songs wurden zur Playlist hinzugefügt ✅`);
});