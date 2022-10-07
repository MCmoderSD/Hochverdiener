const { QueueRepeatMode } = require('discord-player');
const { ApplicationCommandOptionType } = require('discord.js');
module.exports = {
    name: 'loop',
    description: 'Loop an/aus',
    voiceChannel: true,
    blacklist: false,
    options: [
        {
        name: 'action' ,
        description: 'what action you want to preform on the loop',
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
            { name: 'Queue', value: 'enable_loop_queue' },
            { name: 'Disable', value: 'disable_loop'},
            { name: 'Song', value: 'enable_loop_song' },
        ],
    }
    ],
    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Derzeit läuft doch gar kein Song ❌`, ephemeral: true }),
            console.log(`No music currently playing ${inter.member}... try again ? ❌`);
        switch (inter.options._hoistedOptions.map(x => x.value).toString()) {
            case 'enable_loop_queue': {
                if (queue.repeatMode === 1) return inter.reply({ content:`Du musst erstmal die loop von dem derzeitigem Song ausschalten ❌`, ephemeral: true }),
                    console.log(`You must first disable the current music in the loop mode (/loop Disable) ${inter.member}... try again ? ❌`);

                const success = queue.setRepeatMode( QueueRepeatMode.QUEUE);

                return inter.reply({ content:success ? `Loop ist **aktiviert!!!** 🔁` : `Irgendwas lief da schief ${inter.member} Ka versuchs nochmal ❌` });
                break
            }
            case 'disable_loop': {
                const success = queue.setRepeatMode(QueueRepeatMode.OFF);

                return inter.reply({ content:success ? `Loop ist **deaktiviert**` : `Irgendwas lief da schief ${inter.member} Ka versuchs nochmal ❌` });
                break
            }
            case 'enable_loop_song': {
                if (queue.repeatMode === 2) return inter.reply({ content:`u musst erstmal die loop von dem derzeitigem Song ausschalten`, ephemeral: true }),
                    console.log(`You must first disable the current music in the loop mode (/loop Disable) ${inter.member}... try again ? ❌`);

                const success = queue.setRepeatMode( QueueRepeatMode.TRACK);
                
                return inter.reply({ content:success ? `Loop ist **aktiviert!!!** 🔁` : `Irgendwas lief da schief ${inter.member} Ka versuchs nochmal ❌` });
                break
            }
        }
       
    },
};