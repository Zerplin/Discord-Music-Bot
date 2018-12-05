// Load discord.js
const Discord = require("discord.js");
const Commando = require("discord.js-commando");
// Create a client
const bot = new Commando.Client();

bot.registry.registerGroup("simple", "Simple");
bot.registry.registerGroup("music", "Music");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

// This code will run once the bot has started up.
bot.on("ready", function () {
	console.log("Ready to begin! Serving in " + bot.channels.length + " channels");
});

// This code will run once the bot has disconnected from Discord.
bot.on("disconnected", function () {
	// alert the console
	console.log("Disconnected!");

	// exit node.js with an error
	process.exit(1);
});

// This code will run once the bot receives any message.
bot.on("message", function (message) {
	// if message begins with "ping"
	if (message.content.indexOf("ping") === 0) {
		// send a message to the channel the ping message was sent in.
		message.channel.send('pong');

		// alert the console
		console.log("pong-ed " + message.author.username);
	}
});

bot.login("NTE5MTE5MDU3NTEzODczNDIy.Duhefg.qisuGsSIH-pz742ELGaL-PF8leA");

