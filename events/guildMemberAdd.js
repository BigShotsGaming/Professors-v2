module.exports = (client, member) => {
  const settings = client.getSettings(member.guild.id);

  if (settings.welcomeEnabled !== "true") return;

  const welcomeMessage = settings.welcomeMessage.replace("{{user}}", member.user.tag);
  
  const theirWelcome = member.guild.channels.find(c => c.name === settings.welcomeChannel);
  if(theirWelcome) theirWelcome.send(welcomeMessage).catch(console.error);
};