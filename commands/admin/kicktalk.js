module.exports = {
    name: 'kicktalk',

    async execute(client, message, args) {
        message.member.voice.channel.members.forEach(member => {
            member.voice.disconnect();
            console.log(`${member.user.tag} was/were disconnected by ${message.author.tag}`)
        });
        message.delete();
    },};