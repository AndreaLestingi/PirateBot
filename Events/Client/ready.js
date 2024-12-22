const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, ActivityType } = require('discord.js');

module.exports = {
  name: "ready",
  once: true,

  async execute(client) {
    client.user.setPresence({
      activities: [{ name: `Pirate's Songs`, type: ActivityType.Listening }],
    });
  },
};