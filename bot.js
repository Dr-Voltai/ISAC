const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', member => {
client.on('message',

member.guild.channels.get('JOIN/LEAVE gamer-lounge').send('Willkommen);
                                                          
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
