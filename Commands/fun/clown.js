const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require("discord.js");
const { getRandomMeme } = require("@blad3mak3r/reddit-memes");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("clown")
        .setDescription("Generates a clown meme")
        .addMentionableOption((option) =>
            option
                .setName("user")
                .setDescription("The user you want to make a clown")
                .setRequired(true)
        ),
    async execute(interaction) {
        const user = interaction.options.getMentionable("user");

        if (!user || !user.displayAvatarURL) {
            return interaction.reply({
                content: "Invalid user provided. Please try again.",
                ephemeral: true,
            });
        }

        const img = user.displayAvatarURL({ dynamic: true }).replace(/.webp/g, '.png');

        try {
            const image = `https://api.popcat.xyz/clown?image=${encodeURIComponent(img)}`;
            const attachment = new AttachmentBuilder(image, { name: 'clown.png' });
            await interaction.reply({ files: [attachment] });
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: "Oops! Something went wrong while generating the clown meme. Please try again later.",
                ephemeral: true
            });
        }
    },
};
