const Discord = require("discord.js");

exports.run = async (client, message, params) => {
    message.delete();
    const Discord = require('discord.js'),
          coins = [ "heads", "tails" ],
          embed = new Discord.RichEmbed()
    .setTitle('You flipped a coin!')
    .setColor(message.guild.me.displayHexColor)
    .setDescription('It landed on ' + coins[Math.floor(Math.random() * coins.length)] + '!')
    
    message.channel.send(embed)
}
    
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: "coinflip",
  category: "Fun",
  description: "Flips a coin",
  usage: "coinflip"
}