const ms = require('ms');
const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'seek',
    description: 'Spule vor oder zurück',
    voiceChannel: true,
    blacklist: false,
    options: [
    {
        name: 'time',
        description: 'Wie weit du vor oder zurrückspulen willst  willst',
        type: ApplicationCommandOptionType.String,
        required: true,
    }
    ],
    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `Derzeit läuft doch gar kein Song ❌`, ephemeral: true }),
            console.log(`There was no music playing in the server ${inter.guild.name} when the user ${inter.member.user.username} tried to use the seek command`);

        const timeToMS = ms(inter.options.getString('time'));

        if (timeToMS >= queue.current.durationMS) return inter.reply({ content:`Dikka der timer ist länger als der Song wie soll das denn bitte gehen?`, ephemeral: true });

        await queue.seek(timeToMS);

        inter.reply({ content: `Ich bin dann mal nach **${ms(timeToMS, { long: true })}** raus ✅`});
    },
};