const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
  
  
  let channel;
  let item;
  let time;
  let winners;
  
  const m = await message.channel.send({embed: { title: "Lets set up your giveaway!", description: `What channel do you want the giveaway in?`, color: 0xF7F200 }})
  
  const filter = m => m.author.id === message.author.id;
  message.channel.awaitMessages(filter, { max: 1, time: 600000, errors: ['time'] })
  .then(collected => {
       
    const c = collected.first();
    if(c.content.toLowerCase() === 'cancel') return message.channel.send({embed: { description: `The menu was cancelled.`, color: 0xF7F200 }})
    
    channel = c.channel
    m.channel.send(`The giveaway/winner will be posted in ${channel}`)
    
    m.channel.send({embed: { description: "What are you giving away?", color: 0xF7F200 }})
    message.channel.awaitMessages(filter, { max: 1, time: 600000, errors: ['time'] })
    .then(collected2 => {
      const c2 = collected2.first();
      item = c2.content
      m.channel.send(`Awesome! You'll be giving away **${item}**`)
      
    m.channel.send({embed: { title: "How long should the giveaway last?", description: "Time Requirements:\n\nSeconds: s\nMinutes: m\nHours: h", color: 0xF7F200 }})
    message.channel.awaitMessages(filter, { max: 1, time: 600000, errors: ['time'] })
    .then(collected3 => {
      const c3 = collected3.first();
      time = c3.content
      m.channel.send(`The giveaway will be ${time}`)
      
    m.channel.send({embed: { title: "How many winners?", description: "Please enter a number between 1-15 for winners!", color: 0xF7F200 }})
    message.channel.awaitMessages(filter, { max: 1, time: 600000, errors: ['time'] })
    .then(collected4 => {
      const c4 = collected4.first();
      winners = c4.content
      let users = message.guild.members.filter(m => !m.user.bot).map(m => m.user)
      let winner = users.slice(0, c4.content);
      if(isNaN(parseFloat(winners))) return m.channel.send(`Winners must be a number! Menu will now close!`);
      if(winners > 15) return m.channel.send(`You can only have 1-15 winners. Menu will now close!`)
      m.channel.send(`There will be ${winners} winners`)
      m.channel.send({embed: { title: "Giveaway Started", description: `Giveaway Details:\n\nChannel: ${channel}\nItem: ${item}\nTime: ${time}\nWinners: ${winners}`, color: 0xF7F200 }})
      
      setTimeout(function(){ 
    
        let users = message.guild.members.filter(m => !m.user.bot).map(m => m.user)
    
        let winner = users.slice(0, c4.content);
        channel.send({embed: { title: `Here are your winner(s) for: ${item}`, description: `${winner.join(" | ")}`, color: 0xF7F200 }});
  
  }, ms(time));
      
    })  
    
    })
      
    })
  
  })  
  
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "Administrator"
};

module.exports.help = {
  name: "giveaway",
  category: "System",
  description: "Giveaways!",
  usage: "giveaway"
};