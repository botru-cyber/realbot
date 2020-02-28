const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith('$' + 'ban')) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member.ban({
            reason: '**Это очень плохо!**',
          }).then(() => {
            message.reply(`**Вы забанили** ${user.tag}`);
          }).catch(err => {
            message.reply('**Я не смог забанить пользователя.**');
            console.error(err);
          });
        } else {
          message.reply('**Этот пользователь не в вашей гильдии!**');
        }
      } else {
        message.reply('**Укажите пользователя!**');
      }
    }
  });

client.login('Njc2NzE0NzgxNTUzNTkwMjcz.XlD6lg.Y-Q_1LDE8G4XEtD6UVtgwRByp5I');