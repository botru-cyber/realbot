const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if(message.content.startsWith('$' + 'q')) {
        message.reply('Привет',message.author.username)
    }
});

client.login('Njc2NzE0NzgxNTUzNTkwMjcz.XlD6lg.Y-Q_1LDE8G4XEtD6UVtgwRByp5I');