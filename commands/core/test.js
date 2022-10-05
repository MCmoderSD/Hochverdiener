const {database} = require("../../src/database");

module.exports = {
    name: 'test',
    description: "Enfach zum testen",
    showHelp: false,
    execute({ client, inter }) {
        //database.setinitvalues(inter.guild.id, inter.guild.name, "")
        database.getsettings(inter.guild.id, function(err, result) {
            if (err) throw err;
            inter.reply("Test erfolgreich " + result);
        });
    },
};

