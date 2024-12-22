const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");
const GuildSchema = require("../../Schemas/guildSchema");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("kick")
        .setDescription("Kicks a member from the server.")
        .addMentionableOption((option) =>
            option
                .setName("user")
                .setDescription("The user to kick.")
                .setRequired(true)
        ),
    /**
     * 
     * @param {import("discord.js").Interaction} interaction 
     * @returns 
     */
    async execute(interaction) {
        let perm = false;

        const guild = interaction.guild;
        if (!guild) return interaction.reply("This command can only be used in servers.");

        const guildData = await GuildSchema.findOne({ guildId: guild.id });

        if (!guildData) {
            GuildSchema.create({
                guildId: guild.id,
                adminRole: ""
            });
        }


        if (!guildData.adminRole) {
            interaction.member.permissions.has(PermissionFlagsBits.BanMembers) ? perm = true : perm = false;
        } else {
            interaction.member.roles.has(guildData.adminRole) ? perm = true : perm = false;
        }

        if (!perm) return interaction.reply("You do not have permission to use this command.");

        const user = interaction.options.getMentionable("user");

        try {
            await interaction.guild.members.kick(user);
        }catch (error) {
            return interaction.reply("Sorry! I was unable to kick the user.");
        }

        interaction.reply(`Successfully kicked ${user.user.username}!`)
    },
};
