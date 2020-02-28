const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if(message.content.startsWith('$' + 'donate')) {
      const { Client, RichEmbed } = require('discord.js');
      const embed = new RichEmbed()
        .setTitle('Donate')
        .setColor(3447003)
        .setThumbnail('https://media.discordapp.net/attachments/610426384426467348/630368905470148618/9ac5562c06970e887bc8f99f169f6fc7-1-1.gif')   
        .setDescription('**Поддержите нас!**')
        .addField('Нажми на чертов Donate синим цветом!', message.author.send(message.author.tag))
        .setURL('https://www.donationalerts.com/r/auttaja')
        .setFooter('Discord.js' ['https://i.pinimg.com/originals/10/34/26/103426739887a909648fec3ff814c742.gif'])
      message.channel.send(embed);
    }
  });

  client.login('Njc2NzE0NzgxNTUzNTkwMjcz.XlD6lg.Y-Q_1LDE8G4XEtD6UVtgwRByp5I');