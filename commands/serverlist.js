const Discord = require("discord.js")


exports.run = async (bot, message, args) => {
  if(message.author.id !== `236856961478557696`) {
    message.channel.send(`${message.author} Sorry cant use this command!`);
  }else {
    message.channel.send(`__**${bot.user.username} is in the following guilds!**__ \n\n${bot.guilds.map(g => `${g.name} - **${g.memberCount} Members**`).join(`\n`)}`, {split: true});
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['servers'],
  permLevel: 10
};

exports.help = {
  name: "serverlist",
  description: 'Shows the list of servers Professors v2 is on',
  category: 'Util'
};