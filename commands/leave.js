exports.run = (client, message, args) => {
    message.delete();
    const config = require('../config.json');
    if(message.author.id !== config.botownerid) return message.reply('Please ask the bot owner to use this command!!!').then(m => m.delete(10000)); 
    let hyperbeam = message.content.split(" ").slice(1);
    let servername = hyperbeam.join(" ");
    message.reply('I just left ' + servername);
    client.guilds.find(sGuild => sGuild.name = servername).leave()
    if(!servername) return message.channel.send('You need to add a server name for me to leave.').then(m => m.delete(10000));
}
    
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 10
};
    
exports.help = {
  name: "leave",
  description: "Leave a Server",
  usage: "leave"
}