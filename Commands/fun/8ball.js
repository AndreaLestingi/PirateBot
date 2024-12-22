const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, Colors } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("8ball")
        .setDescription("Ask a question and let 8ball answer")
        .addStringOption((option) =>
            option
                .setName("question")
                .setDescription("The question you want to ask")
                .setRequired(true)
        ),
    /**
     * 
     * @param {import("discord.js").Interaction} interaction
     * @returns 
     */
    async execute(interaction) {
        const question = interaction.options.getString("question");

        if (!question) return message.reply('Please specify a question!');
        let responses = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes definitely',
            'You may rely on it',
            'As i see it, yes',
            'Most likely',
            'For sure',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            "Don't count on it",
            'My reply is no',
            'My sources say no',
            'Outlook not so good',
            'Very doubtful',
            'Ask PHV about it',
        ];
        const response = Math.floor(Math.random() * responses.length);

        const embed = new EmbedBuilder()
            .setColor(Colors.Gold)
            .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
            .setTitle("🎱 8ball")
            .addFields(
                { name: "Question", value: question },
                { name: "Answer", value: responses[response] }
            )
            .setTimestamp()
        
        interaction.reply({ embeds: [embed] });
    },
};
