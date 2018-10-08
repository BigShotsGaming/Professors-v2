const Discord = require('discord.js');

exports.run = async (client, message, args) => { 
  var rol = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find(gRole => gRole.name == rol)
  var hata = new Discord.RichEmbed()
  .setColor(client.color)
  .setDescription("❌ Please write ** Example: roleinfo Member**");
  if(!role) return message.channel.send(message.author, hata);
  
  var moment = require("moment");
  var temps = moment(message.createdTimestamp).format("LLLL");
  var roleinfoEmbed = new Discord.RichEmbed()
  .setColor(role.hexColor)
  .addField('✏ Role Name', role.name, true)
  .addField('🆔 ID', role.id, true)
  .addField('👥 How many in this role', role.members.size, true)
  .addField('💙 Color', role.hexColor, true)
  .addField('📣 Mentionable ', role.mentionable ? '\nYes' : 'No', true)
  .setFooter("");
  message.channel.send(message.author, roleinfoEmbed)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
};

exports.help = {
    name: 'roleinfo',
    category: '💈 Utilities',
    description: 'Mostra as informações de um cargo',
    usage: 'roleinfo member'
};