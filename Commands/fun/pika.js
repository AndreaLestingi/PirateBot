const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require("discord.js");
const { getRandomMeme } = require("@blad3mak3r/reddit-memes");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pika")
        .setDescription("Generates pikachu memes")
        .addStringOption((option) =>
            option
                .setName("text")
                .setDescription("The text you want to add to the meme")
                .setRequired(true)
        ),
    async execute(interaction) {
        const text = interaction.options.getString("text") || "Pikachu meme";
        try {
            let image = `https://api.popcat.xyz/pikachu?text=${encodeURIComponent(text)}`;
            let imgae = new AttachmentBuilder(image, {name: 'pika.png'});
            interaction.reply({ files: [imgae] });
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: "Oops! Something went wrong while fetching the meme. Please try again later.",
                ephemeral: true
            });
        }
    },
};
