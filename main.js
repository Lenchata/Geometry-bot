const { Client, Intents } = require("discord.js");
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
    if (message.content === "!ping") {
        message.reply(`Pong! Latency is ${client.ws.ping}ms.`);
    }
}
);

client.login("OTY3OTUxNDczMDg4NTYxMjEy.GHAaFt.DthR_9cIW3eZwxqm-35LjPUSXbi8Ytqj0PNQi8");
