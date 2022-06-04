module.exports = {
    name: 'kicktalk',

    async execute(client, message, args) {
        message.member.voice.channel.members.forEach(member => {
            member.voice.disconnect();
        });
        message.delete();
    },};