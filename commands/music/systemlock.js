const play = require("./play");
let locked = false;

module.exports = {
    name: 'systemlock',
    utilisation: 'lock bot in channel',
    voiceChannel: true,

    async execute(client, message, args) {
        global.locked = !global.locked;

        message.delete();
},};