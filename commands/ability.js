const smogon = require("../data/smogon.js");

exports.run = (client, message, args) => {
    message.delete();
  let abil = args.join(" ").toLowerCase();
  smogon.SmogonAbilities(client, abil.replace(/ /g, "-"), ability => {
    if (ability.error) return message.reply("Invalid ability specified.").then(m => m.delete(10000));
    const embed = new client.Discord.RichEmbed()
      .setTitle(client.capFL(abil))
      .setDescription(ability.description)
      .setColor(client.randomColor)
      .setThumbnail(client.user.avatarURL)
      .setFooter("AbilityDex", client.user.avatarURL);
    message.channel.send({embed});
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};
  
exports.help = {
  name: "ability",
  category: "System",
  description: 'Get info on an Ability.',
  usage: 'ability <ability>'
};