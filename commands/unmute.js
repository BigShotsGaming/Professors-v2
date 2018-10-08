exports.run = (bot, message, args, level) => {
    const Discord = require("discord.js");
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send({embed: new Discord.RichEmbed().setTitle("❌ I do not have permission.").setColor("#ff0000")});
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send({embed: new Discord.RichEmbed().setTitle("❌ You do not have permission.").setColor("#ff0000")});
    var mutee = message.mentions.users.array();
    for (var k = 0; k < mutee.length; k++) {
        var member = message.guild.members.get(mutee[k].id);
        var user = bot.users.get(mutee[k].id);
        var guild = message.guild;
        var channels = message.guild.channels.array();
        for (var i = 0; i < channels.length; i++) {
            if (channels[i].type == 'text')
                channels[i].overwritePermissions(member, {
                    SEND_MESSAGES: null,
                    ADD_REACTIONS: null
                })
        };
        var unmute = new Discord.RichEmbed();
        unmute.setTitle('❗ A user has been unmuted')
            .addField('Unmutee', user)
            .addField('Unmuter', message.author)
            .setTimestamp()
            .setColor("#ff0000")
        message.channel.send({
            embed: unmute
        })
    };
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['unshush'],
	permLevel: 0
};

exports.help = {
    name: 'unmute',
    description: 'Unmute a user.',
    usage: 'unmute <mention user>',
    category: 'Moderation',
};