const {database} = require("../../src/database");

module.exports = {
    name: 'test',
    description: "Enfach zum testen",
    showHelp: false,
    blacklist: false,
    execute({client, inter}) {
        let role
        if (inter.member.roles.cache.find(role => role.name === 'Hochverdiener-Admin')) role = true;

        if (role) {

            //console.log(inter.member.role.name) //crash bot
            /*
                    let role
                    if (inter.member.roles.cache.find(role => role.name === 'Developer')) role=true;

                    if (role) {

                    }
                        console.log(role);

             */
        }
    },
};

