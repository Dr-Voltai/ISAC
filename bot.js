const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NjU4NTc3MjEyMDI2NTE5NTU0.XgBy1g.bDNcWvDzvoPyJVDiM7lc1NJbdC8);
