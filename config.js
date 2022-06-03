const { TOKEN } = require("./token");

module.exports = {
    app: {
        px: '!',
        token: TOKEN,
        playing: 'Befehle: !back !clear !loop !pause !resume !seek !shuffle !skip !stop !volume'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 200,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }

};