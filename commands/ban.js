
const Discord = require("discord.js");
const { inspect } = require("util");

exports.run = (client, message, args) => {
  const settings = message.settings;
  const reason = args.slice(1).join(" ");
  const user = message.mentions.users.first(); // User = first user mentioned
  inspect((settings), {code: "json"});
  const modLog = message.guild.channels.find(c => c.name === settings.modLogChannel);
  if (!modLog) return message.reply("I cannot find a mod-log channel");
  if (reason.length < 1) return message.reply("You must supply a reason for the ban.");
  if (message.mentions.users.size < 1) return message.reply("You must mention someone to ban them.").catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply("I cannot ban that member.");
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor("#FF4848")
    .setTimestamp()
    .setThumbnail("https://cdn.discordapp.com/attachments/457618867980730399/498542241531428865/Professors.png")
    .setDescription("**Action:** Ban")
    .addField("Target:", `${user.tag}`, true)
    .addField("Moderator:", `${message.author.tag}`, true)
    .addField("Reason:", `${reason}`, true);
  return client.channels.get(modLog.id).send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Moderator"
};

exports.help = {
  name: "ban",
  category: "Moderation",
  description: "Bans the mentioned user.",
  usage: "ban [mention] [reason]"
};