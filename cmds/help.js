const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) => {
  if(message.content.startsWith('$' + 'help')) {
message.channel.send({
  embed: {
      color: 00000,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: 'Help',
      description: 'Команды!',
      fields: [
          {
              name: 'Основные',
              value: '**$avatar,$help,$donate,$ping,$useri,$serveri**'
          },
          {
              inline: true,
              name: 'Административные',
              value: '**$ban,$kick,$clear**'
          },
          {
              inline: true,
              name: 'Развлечения',
              value: '**$ball,$q**'
          }
      ],
      timestamp: new Date(),
      footer: {
          icon_url: client.user.avatarURL,
          text: 'Библиотека Discord.js,bot by Auttaja#8551'
      } }
    }
)
  }
});
  
  client.login('Njc2NzE0NzgxNTUzNTkwMjcz.XlD6lg.Y-Q_1LDE8G4XEtD6UVtgwRByp5I');