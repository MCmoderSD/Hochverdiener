let { Locked } = require('System.Lock');
module.exports = {
    name: 'System.Lock',
    utilisation: 'lock bot in channel',
    voiceChannel: true,

    async execute(client, message, args) {
       message.remove;
         Locked = !Locked;

},};