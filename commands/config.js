const {
    RichEmbed
} = require('discord.js');

exports.run = async (client, message, args) => {
    let embed = new RichEmbed().setDescription(`**Configuration on : ${message.guild.name}**\n`);
    let guild = message.guild.id;

    let prefix = client.settings.get(guild).prefix;
    let join = client.settings.get(guild).welcome.join;
    let leave = client.settings.get(guild).welcome.leave;
    let welcome = client.settings.get(guild).welcome.channel;
    let auto = client.settings.get(guild).welcome.autorole;
    let logs = client.settings.get(guild).modlogs;
    let perm2 = client.settings.get(guild).perms.mod;
    let perm3 = client.settings.get(guild).perms.admin;
    let perm4 = client.settings.get(guild).perms.owner;

    welcome = message.guild.channels.get(welcome);
    logs = message.guild.channels.get(logs);

    auto = message.guild.roles.get(auto);
    perm2 = message.guild.roles.get(perm2);
    perm3 = message.guild.roles.get(perm3);
    perm4 = message.guild.roles.get(perm4);

    let i = 0;
    if (!join) {
        join = `\`Indefinite\``;
        i++;
    }
    if (!leave) {
        leave = `\`Indefinite\``;
        i++;
    }
    if (!welcome) {
        welcome = `\`Indefinite\``;
        i++;
    }
    if (!auto) {
        auto = `\`Indefinite\``;
        i++;
    }
    if (!logs) {
        logs = `\`Indefinite\``;
        i++;
    }
    if (!perm2) {
        perm2 = `\`Indefinite\``;
        i++;
    }
    if (!perm3) {
        perm3 = `\`Indefinite\``;
        i++;
    }
    if (!perm4) {
        perm4 = `\`Indefinite\``;
        i++;
    }

    let color = 0x00ff0c;
    if (i == 8) color = 0xff0000;
    else if (i == 6 || i == 7) color = 0xff4141;
    else if (i == 4 || i == 5) color = 0xfc591e;
    else if (i == 2 || i == 3) color = 0xefe832;
    else if (i == 1) color = 0x32ef51;

    embed.addField(`Welcome`, `Welcome Channel : ${welcome}\nMessage (Join): \`${join}\`\nMessage (Leave) : \`${leave}\`\nAutoRôle : ${auto}`, true);
    embed.addField(`Permissions`, `Mod [2] : ${perm2}\nAdmin [3] : ${perm3}\nServer Owner [4] : ${perm4}`, true);
    embed.addField(`Utilities`, `Prefix : \`${prefix}\``, true);
    embed.addField(`Moderation`, `Log Channel : ${logs}`, true);
    embed.setColor(color);

    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Server Owner"
};

exports.help = {
    name: 'config',
    description: 'Voir la configuration du bot sur votre serveur.',
    usage: 'config',
    category: 'Server'
};