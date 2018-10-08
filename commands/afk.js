exports.run = (bot, message, args, level) => {
    const Discord = require("discord.js");
    var fs = require('fs');
    if (!args[0]) {
        var why = "not specified"
    } else {
        var why = args.join(" ");
    }
    const afkJson = fs.readFileSync('./afk.json');
    const afk = JSON.parse(afkJson);
    const reasonJson = fs.readFileSync('./reason.json');
    const reason = JSON.parse(reasonJson);
    afk.push({
        "id": message.author.id
    });
    reason.push({
        "reason": why
    });
    fs.writeFileSync('./afk.json', JSON.stringify(afk, null, 1));
    fs.writeFileSync('./reason.json', JSON.stringify(reason, null, 1));
    var sent = new Discord.RichEmbed();
    sent.setTitle(message.author.username + ' is AFK')
        .addField('Reason:', why)
        .setFooter("AFK")
        .setTimestamp()
        .setColor('#FF9900')
    message.channel.send({
        embed: sent
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'afk',
    description: 'Sets your afk status',
    usage: 'afk <reason(optional)>',
    category: 'System'
};