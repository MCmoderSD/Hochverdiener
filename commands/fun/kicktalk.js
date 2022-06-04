module.exports = {
    name: 'kicktalk',
    utilisation: 'lock bot in channel',

    async execute(client, message, args) {
        message.member.voice.channel.members.forEach(member => {
            member.voice.disconnect();
        });
        message.delete();
    },};