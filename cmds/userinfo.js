const Discord = module.require("discord.js");
const client = new Discord.Client();

    client.on('message', message => {
        if(message.content.startsWith('$' + 'useri')) {
    const { Client, RichEmbed } = require('discord.js');
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о пользователе")
    .setColor('#ffafa0')
    .addField("Имя",message.author.username)
    .addField("Тег",message.author.tag)
    .addField("Дискриминатор",message.author.discriminator)
    .addField("Создание аккаунта",message.author.createdAt)
    .addField("ID",message.author.id)
    .addField("Вы бот?",message.author.client)
    .setThumbnail(message.author.avatarURL)

    message.channel.send(embed);
 }});

client.login('Njc2NzE0NzgxNTUzNTkwMjcz.XlD6lg.Y-Q_1LDE8G4XEtD6UVtgwRByp5I');