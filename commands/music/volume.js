const maxVol = client.config.opt.maxVol;
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'volume',
    description: 'adjust',
    voiceChannel: true,
    blacklist: false,
    options: [
        {
            name: 'volume',
            description: 'Wie laut ich die Musik machen soll',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 1,
            maxValue: maxVol
        }
    ],

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `Derzeit läuft doch gar kein Song ❌`, ephemeral: true }),
            console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the volume command`);
        const vol = inter.options.getNumber('volume')

        if (queue.volume === vol) return inter.reply({ content: `Ja perfekt du Idiot **DES WAR DOCH SCHON EINGESTELLT!!!** ❌`, ephemeral: true });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `So lautstärke ist jetzt auf **${vol}**/**${maxVol}**% 🔊` : `Irgendwas lief da schief ${inter.member} Ka versuchs nochmal ❌`});
    },
};