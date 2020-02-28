const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const {
  prefix,
  token,
 } = require('./config.json');

client.on('ready', () => {
  console.log(`Здаров бандит! ${client.user.tag} идёт на охоту!`);
});


const activities_list = [ 
  "LISTENING", 
  " Mechanical bot || $help "
  ]; // creates an arraylist containing phrases you want your bot to switch through.

client.on('ready', () => {
  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
      client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
  }, 10000); // Runs this every 10 seconds.
});

const queue = new Map();

fs.readdir('./cmds/',(err,files)=>{
  if(err) console.log(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <=0) console.log("No start commands");
  console.log(`loaded ${jsfiles.length} commands`);
  jsfiles.forEach((f,i) =>{
    let props = require(`./cmds/${f}`);
    console.log(`${i+1}.${f} loaded`);      
  })
});

client.login('Njc2NzE0NzgxNTUzNTkwMjcz.XlD6lg.Y-Q_1LDE8G4XEtD6UVtgwRByp5I');
