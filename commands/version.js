const Discord = require("discord.js")

exports.run = (bot, message, args) => {
    let vEmbed = new Discord.RichEmbed()
	.setDescription("Professors Version")
	.addField("Version:", "v2.0")
	.addField("Professors Owner", "Michael")
	.addField("Updates", "You can now setup your servers according to your server.\nTry doing the help command to see how to setup your server.")
    .setColor("#ff0000")
    .setThumbnail("https://cdn.discordapp.com/attachments/491831030848684032/495273984070254612/Professors.png")
	.setFooter("Check Out https://www.gamercord.com")
	message.channel.send(vEmbed);
	message.delete()
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['ld'],
	permLevel: 4
};

exports.help = {
	name: "version",
	category: 'Commands',
	description: 'Check Versions & Whats Coming Up',
	usage: 'version'
};