const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) => {
if (message.content == "$" + "ping") {
    message.channel.send("Pong! `" + Math.floor(Math.round(client.ping)) + "`ms");

    message.delete();
    }})

client.login('Njc2NzE0NzgxNTUzNTkwMjcz.XlD6lg.Y-Q_1LDE8G4XEtD6UVtgwRByp5I');