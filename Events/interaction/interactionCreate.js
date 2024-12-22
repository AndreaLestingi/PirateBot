const { CommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) {
      await interaction.reply({ content: "Outdated command" });
      return;
    }

    try {
      await command.execute(interaction, client);
    } catch (error) {
      console.error('Error handling interaction:', error);
    }
  },
};
