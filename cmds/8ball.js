const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) => {
    if(message.content.startsWith('$' + 'ball')) {
answer = ["Да!", "Нет!", "Возможно..", "Не-а.", "Частично..", "Я.. Иди нахуй:grey_exclamation:", "Не могу предсказать:eyes:", "А я гееей) :heart:"];
message.channel.send(answer[Math.floor(Math.random() * answer.length)]);
    
    }
});
    client.login('Njc2NzE0NzgxNTUzNTkwMjcz.XlD6lg.Y-Q_1LDE8G4XEtD6UVtgwRByp5I');