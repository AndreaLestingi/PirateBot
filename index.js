const config = require('./config.json');
const dotenv = require("dotenv");
const mongoose = require('mongoose');

const { Client, GatewayIntentBits, Partials, Collection, ChannelType, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');
const { Guilds, GuildMembers, GuildMessages, GuildPresences } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember, Channel } = Partials;
const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages, GuildPresences],
    partials: [User, Message, GuildMember, ThreadMember, Channel]
})

client.config = config;

client.commands = new Collection();

const { loadCommands } = require("./Handlers/commandHandler");
const { loadEvents } = require("./Handlers/eventHandler");

mongoose.connect(config.database).then(() => {
    console.log("Connected to MongoDB");
}).catch(console.error);

client.login(config.token).then(() => {
    loadCommands(client);
    loadEvents(client);
}).catch(console.error);