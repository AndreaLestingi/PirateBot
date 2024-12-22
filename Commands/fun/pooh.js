const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require("discord.js");
const { getRandomMeme } = require("@blad3mak3r/reddit-memes");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pooh")
        .setDescription("Generates a pooh meme")
        .addStringOption((option) =>
            option
                .setName("text1")
                .setDescription("The text you want to add to the meme")
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName("text2")
                .setDescription("The text you want to add to the meme")
                .setRequired(true)
        ),
    async execute(interaction) {
        const text1 = interaction.options.getString("text1") || "Pooh meme";
        const text2 = interaction.options.getString("text2") || "Pooh meme";

        try {
            const image = `https://api.popcat.xyz/pooh?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;
            const attachment = new AttachmentBuilder(image, { name: 'pooh.png' });
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
