const { TOKEN } = require("./token");
const { allCommands } = require("./commands/core/help")

module.exports = {
    app: {
        px: '!',
        token: TOKEN,
        playing: `Befehle: ${allCommands}`
    },

    opt: {
        /*DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },*/
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