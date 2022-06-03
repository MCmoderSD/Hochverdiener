module.exports = {
    app: {
        px: '!',
        token: 'OTU0MTM2NzM0NDgyOTg5MDk2.GQXJUA.75g5o2tXVCWrXHdgU-1TXUF_kNrb6M2yGi0ibI',
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