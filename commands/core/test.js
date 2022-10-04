const {database} = require("../../src/database");

module.exports = {
    name: 'test',
    description: "Enfach zum testen",
    showHelp: false,

    execute({ client, inter }) {
        database.setvalues(inter.guild.id, inter.guild.getName, "test")

        inter.reply("Test erfolgreich");
    },
};
