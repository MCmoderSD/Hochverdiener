
player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
    global.locked = false;
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
    global.locked = false;
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Jetzt läuft **${track.title}** im **${queue.connection.channel.name}** Channel`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Ich hab den Song **${track.title}** zur Playlist hinzugefügt ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Welcher KNEK hat mich disconnected???');
    global.locked = false;
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Wenn keiner mehr da ist kann ich mich auch gleich verpissen!');
    global.locked = false;
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('So bin fertig **FICKT EUCH bin weg** ✅');
});