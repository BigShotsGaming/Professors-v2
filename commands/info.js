const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

  let infoEmbed = new Discord.RichEmbed()
  .setDescription("Professors is a Moderation bot")
  .setColor("RANDOM")
  .addField('Invite the bot!', '[Invite Professors](https://discordapp.com/oauth2/authorize?client_id=494708881344430081&scope=bot&permissions=2146958847)', true)
  .addField('Join the support server!', '[Join Monstacord Support!](https://discord.gg/BYzSGN9)', true)


  message.channel.send(infoEmbed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "info",
  category: "Miscelaneous",
  description: "Info on how to get the bot on your server.",
  usage: "info"
};