const ms = require('ms');
const adminCommands = '!ban !disconnect !kick !kicktalk !setlvl'
const coreCommands = '!help !ping'
const tagCommands = '!dicksize !fakt !insult !iq !joke !mobbing !sexist !zahl'
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