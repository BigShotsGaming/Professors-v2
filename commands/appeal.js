const Discord = require('discord.js');

exports.run = (r4dar, message, args) => {
  let reason = args.slice(1).join(' ');
  let guild = message.guild
  let appeal = guild.channels.find(appealChannel => appealChannel.id = '497565968113860619');
  if (!appeal) return message.reply('`I cant find the channel `appeals` please create one.');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Write what will be your benefit to our server,Your name,Your age,Say the role you want and your tag');
  if (message.mentions.users.size < 1) return message.reply('Tag your nick').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0xD97634)
    .setTimestamp()
    .addField('Status:', 'Demand opened')
    .addField('Requestor:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Demand infoes', reason);
	
	return guild.channels.get(appeal.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'appeal',
  category: 'System',
  description: "Appeal a ban",
  usage: "appeal"
};