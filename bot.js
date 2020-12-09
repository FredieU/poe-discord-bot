const Discord = require("discord.js");
const config = require("./config.json");
const { EVENTS } = require("./src/constants");
const { onMessage, onReady } = require("./src/events");

const client = new Discord.Client();
client.login(config.token);

client.once(EVENTS.READY, onReady);

client.on(EVENTS.MESSAGE, onMessage);
