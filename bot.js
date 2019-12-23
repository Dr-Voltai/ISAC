const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
        
bot.on('guildMemberAdd', member => {
    member.guild.channels.get('gamer-lounge').send("Willkommen")
}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
