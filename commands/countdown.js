exports.run = function(client, message, args, level) {
    let i = 30;
    message.channel.sendMessage("Countdown: " + i + "s").then(message => {
        var countInterval = setInterval(() => {
          if(i === 10) {
            message.edit(i = "Countdown complete.");
            return clearInterval(countInterval);
          }
          message.edit("Countdown: " + (i = i - 10) + "s")
        }, 10000);
      })
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
}

exports.help = {
    name: "countdown",
    category: "System",
    description: "Counts down from 30",
    usage: "countdown <countdownFrom30>",
}
