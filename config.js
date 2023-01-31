const {TOKEN, devTOKEN} = require("./token");

module.exports = {
    app: {
        token: TOKEN,
        devToken: devTOKEN,
        playing: '!help',
        global: true,
        guild: 'Hochverdiener'
    },

    opt: {
/*        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },*/
        maxVol: 200,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 100,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};

const dumm = `Geht nicht! bist **du** dumm? ❌`
module.exports.dumm= dumm;