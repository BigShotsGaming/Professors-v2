const smogon = require("../data/smogon.js");

exports.run = (client, message, args) => {
  let i = args.join(" ").toLowerCase();
  smogon.SmogonItems(client, i.replace(/ /g, "_"), item => {
    if (item.error) return message.reply("Invalid item specified.");
    const embed = new client.Discord.RichEmbed()
      .setTitle(client.capFL(i))
      .setDescription(item.description)
      .setColor(client.randomColor)
      .setThumbnail(client.user.avatarURL)
      .setFooter("ItemDex", client.user.avatarURL);
    if (item.pokemon.length > 0) embed.addField("Useful for...", item.pokemon.join(", "));
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
    name: "item",
    category: "System",
    description: "Search for an item",
    usage: "item"
  };