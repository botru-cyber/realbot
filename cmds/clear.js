const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if(message.content.startsWith("$clear")) {
      message.delete();
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
          return
            message.delete();
     
            let args = message.content.split(" ").slice(1);
     
        if(!args[0]) return message.channel.send("Укажите сколько сообщений удалить :/")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`Я удалил ${args[0]} сообщений :D`);
            console.log(`Я удалил ${args[0]} сообщений в "${message.guild.name}" :D`);
            message.delete(1000)
})}});

client.login('Njc2NzE0NzgxNTUzNTkwMjcz.XlD6lg.Y-Q_1LDE8G4XEtD6UVtgwRByp5I');