# PirateBot
Multi-functional Discord bot

## Introduction
PirateBot is a multi-functional Discord bot designed to enhance your server experience with a variety of features and commands. Whether you're looking for moderation tools, fun commands, or utility functions, PirateBot has got you covered.

## Features
- **Moderation Tools:** Kick, ban, mute, and manage your server with ease.
- **Fun Commands:** Add some fun to your server with various interactive commands.
- **Utility Functions:** Useful commands like weather, time, and more to assist your server members.

## Installation
To install PirateBot, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/AndreaLestingi/PirateBot.git
   ```
2. Navigate to the project directory:
   ```bash
   cd PirateBot
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Configure the bot by setting up the necessary environment variables. You can edit `config.json` file in the project directory and add the following:
   ```json
   {
    "token": "DISCORD_TOKEN",
    "database": "MONGO_DB_URL"
}
   ```
5. Start the bot:
   ```bash
   node .
   ```

## Usage
Once the bot is installed and running, you can use various commands to interact with it. Here are some examples:

- **Moderation Commands:**
  - `/kick @user`
  - `/ban @user`

- **Fun Commands:**
  - `/meme`
  - `/clown @user`
  - `/8ball <message>`
  - `/pika <message>`
  - `/pooh <message>`

- **Utility Commands:**
  - `/weather [city]` (soon)
  - `/time [timezone]` (soon)

## Contributing
We welcome contributions to PirateBot! If you'd like to contribute, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with a clear message.
4. Push your changes to your forked repository.
5. Create a pull request with a detailed description of your changes.

## License
PirateBot is licensed under the MIT License. See the [LICENSE](https://github.com/AndreaLestingi/PirateBot/blob/main/LICENSE) file for more information.
