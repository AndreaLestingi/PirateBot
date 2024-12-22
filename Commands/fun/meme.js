const { SlashCommandBuilder, EmbedBuilder, Colors } = require("discord.js");
const { getRandomMeme } = require("@blad3mak3r/reddit-memes");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("meme")
        .setDescription("Get a random meme from Reddit"),
    async execute(interaction) {
        try {
            const meme = await getRandomMeme(); // Assicurati che getRandomMeme ritorni una Promise

            const embed = new EmbedBuilder()
                .setTitle("🗨️ Meme")
                .setColor(Colors.Navy)
                .addFields([
                    { name: "Title", value: meme.title || "No title", inline: true },
                    { name: "Subreddit", value: meme.subreddit || "No subreddit", inline: true },
                    { name: "Author", value: meme.author || "No author", inline: true },
                    { name: "Upvotes", value: meme.ups?.toString() || "0", inline: true },
                    { name: "Downvotes", value: meme.downs?.toString() || "0", inline: true },
                    { name: "Score", value: meme.score?.toString() || "0", inline: true },
                    { name: "NSFW", value: meme.nsfw ? "Yes" : "No", inline: true }
                ])
                .setImage(meme.image || null)
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            await interaction.reply({
                content: "Oops! Something went wrong while fetching the meme. Please try again later.",
                ephemeral: true
            });
        }
    },
};
