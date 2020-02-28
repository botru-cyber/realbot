const Discord = module.require("discord.js");
const client = new Discord.Client();

    client.on('message', message => {
if(message.content.startsWith('$' + 'serveri')) {
    const { Client, RichEmbed } = require('discord.js');
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о сервере")
    .setColor('#10c7e2')
    .addField("Название сервера",message.guild.name)
    .addField("Создание сервера",message.guild.createdAt)
    .addField("Вы присоеденились к серверу",message.guild.joinedAt)
    .addField("Кол-Во участников",message.guild.memberCount)
    .addField("Регион",message.guild.region)
    .setThumbnail(message.guild.iconURL)

    message.channel.send(embed);

}});

client.login('Njc2NzE0NzgxNTUzNTkwMjcz.XlD6lg.Y-Q_1LDE8G4XEtD6UVtgwRByp5I');
