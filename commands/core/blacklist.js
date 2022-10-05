const {database} = require("../../src/database");
const {ApplicationCommandOptionType} = require("discord.js");

module.exports = {
    name: 'blacklist',
    description: "Kann einen command blacklisten oder unblacklisten",
    showHelp: false,
    options: [
        {
            name: 'command',
            description: 'Welchen Command willst du blacklisten/unblacklisten',
            type: 3,
            required: false,
        }
    ],

    execute({ client, inter }) {
        let command = inter.options.getString('command');
        if(command)
        database.getsettings(inter.guild.id, function(err, result) {
            if (err) throw err;
            if(result.includes(command + ";"))
            {
                database.setsettings(inter.guild.id, result.replace(command + ";", ""));
                    inter.reply("Command erfolgreich unblacklisted");
            }
            else
            {
                database.setsettings(inter.guild.id, result + command + ";" );
                    inter.reply("Command erfolgreich blacklisted");
            }
        });
        else
        {
            database.getsettings(inter.guild.id, function(err, result) {
                if (err) throw err;
                inter.reply("Blacklisted Commands: " + result);
            });
        }
    },
};

