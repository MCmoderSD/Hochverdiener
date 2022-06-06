const ms = require('ms');
const tagCommands = '!fakt !insult !iq !joke !mobbing !sexist'
const musicCommands = '!back !clear !loop !nowplaying !pause !play !progress !queue !resume !save !search !seek !shuffle !skip !stop !volume'
const allCommands = `${tagCommands} ${musicCommands}`
module.exports = {
    name: 'help',
    aliases: ['hilfe', 'h'],


    execute(client, message) {
        message.channel.send(`Alle @ Befehle: ${tagCommands} \nAlle Music Befehle: ${musicCommands}`);
    },
};

module.exports.allCommands=allCommands