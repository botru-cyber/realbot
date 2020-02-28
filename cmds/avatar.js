const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    // If the message is "what is my avatar"
    if(message.content.startsWith('$' + 'avatar')) {
      message.channel.sendMessage('Ваш аватар!')
      // Send the user's avatar URL
      message.reply(message.author.avatarURL);
    }
  });

  client.login('Njc2NzE0NzgxNTUzNTkwMjcz.XlD6lg.Y-Q_1LDE8G4XEtD6UVtgwRByp5I');