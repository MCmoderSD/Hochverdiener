const {database} = require("../../src/database");
const {
    ApplicationCommandOptionType,
    EmbedBuilder,
    ActionRowBuilder,
    SelectMenuBuilder,
    ButtonBuilder
} = require("discord.js");

module.exports = {
    name: 'blacklist',
    description: "Kann einen command blacklisten oder unblacklisten",
    showHelp: false,
    options: [
        {
            name: 'command',
            description: 'Welchen Command willst du blacklisten/unblacklisten',
            type: ApplicationCommandOptionType.String,
            required: false,
        }
    ],

    execute({client, inter}) {

        let role
        if (inter.member.roles.cache.find(role => role.name === 'Hochverdiener-Admin')) role = true;

        if (role) {


            let command = inter.options.getString('command');
            if (command) switchCommandStatus(client, inter, command, true);
            else {
                database.getsettings(inter.guild.id, function (err, result) {
                    if (err) throw err;
                    const row2 = new ActionRowBuilder().addComponents(new ButtonBuilder().setCustomId("added_blacklistagain").setLabel("Noch Ein Command").setStyle(1), new ButtonBuilder().setCustomId("added_blacklistexit").setLabel("Exit").setStyle(4));
                    const row = new ActionRowBuilder()
                        .addComponents(
                            new SelectMenuBuilder()
                                .setCustomId('added_blacklistselect')
                                .setPlaceholder('Kein Command Ausgewählt')
                        );
                    client.commands.map((command) => {

                        if (command.blacklist || result.includes(command.name + ";")) {
                            let label = command.name;
                            if (result.includes(command.name + ";"))
                                label += " (Blacklisted)";
                            row.components[0].addOptions([{
                                label: label,
                                value: command.name,
                                description: command.description,
                            }]);
                        }
                    });
                    inter.reply({embeds: [getEmbed("Blacklisted Commands", result)], components: [row]});
                    client.on('interactionCreate', async interaction => {
                        if (!interaction.isSelectMenu()) return;
                        if (interaction.customId === 'added_blacklistselect') {
                            interaction.values.forEach((value) => {
                                switchCommandStatus(client, interaction, value);
                                if (result.includes(value + ";"))
                                    result = result.replace(value + ";", "");
                                else
                                    result += value + ";";
                            });
                            interaction.update({
                                components: [row2],
                                embeds: [getEmbed("Blacklisted Commands", result)]
                            });
                        }
                    });
                    client.on('interactionCreate', async interaction => {
                        if (!interaction.isButton()) return;
                        if (interaction.customId === 'added_blacklistagain') {
                            const row = new ActionRowBuilder()
                                .addComponents(
                                    new SelectMenuBuilder()
                                        .setCustomId('added_blacklistselect')
                                        .setPlaceholder('Kein Command Ausgewählt')
                                        .setMinValues(1)
                                );
                            client.commands.map((command) => {
                                if (command.blacklist || result.includes(command.name + ";")) {
                                    let label = command.name;
                                    if (result.includes(command.name + ";"))
                                        label += " (Blacklisted)";
                                    row.components[0].addOptions([{
                                        label: label,
                                        value: command.name,
                                        description: command.description,
                                    }]);
                                }
                            });
                            interaction.update({components: [row], embeds: [getEmbed("Blacklisted Commands", result)]});
                        }
                    });
                    client.on('interactionCreate', async interaction => {
                        if (!interaction.isButton()) return;
                        if (interaction.customId === 'added_blacklistexit') {
                            interaction.update({components: [], embeds: [getEmbed("Blacklisted Commands", result)]});
                        }
                    });
                });
            }
        } else {
            inter.reply("Du benötigst die Rolle Hochverdiener-Admin um diesen Command zu nutzen");
        }
    }
};

function switchCommandStatus(client, inter, command, reply) {
    database.getsettings(inter.guild.id, function (err, result) {
        if (err) throw err;
        if (result.includes(command + ";")) {
            database.setsettings(inter.guild.id, result.replace(command + ";", ""));
            if (reply)
                inter.reply("Command erfolgreich unblacklisted");
        } else {
            database.setsettings(inter.guild.id, result + command + ";");
            if (reply)
                inter.reply("Command erfolgreich blacklisted");
        }
    });
}

function getEmbed(title, result) {
    let description = result.replaceAll(";", "\n");
    if (description === "") description = "Keine Commands Blacklisted";
    return new EmbedBuilder().setColor('#ff0000').setTitle(title).setDescription(description);
}



