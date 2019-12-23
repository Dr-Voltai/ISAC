package de.ISAC;

import net.dv8tion.jda.api.entities.Member;
import net.dv8tion.jda.api.entities.TextChannel;
import net.dv8tion.jda.api.events.guild.member.GuildMemberJoinEvent;
import net.dv8tion.jda.api.events.guild.member.GuildMemberLeaveEvent;
import net.dv8tion.jda.api.hooks.ListenerAdapter;

public class JoinListener extends ListenerAdapter {

	@Override
	public void onGuildMemberJoin(GuildMemberJoinEvent event) {
		Member member = event.getMember();
		TextChannel channel; 
		
		
		
		if((channel = event.getGuild().getDefaultChannel()) != null); {
			channel.sendMessage("Ein neuer Agent ist der Gruppe beigetreten" + member.getAsMention()).queue();
		
		
		
		}
		
	}
	
	@Override
	public void onGuildMemberLeave(GuildMemberLeaveEvent event) {
		Member member = event.getMember();
		TextChannel channel; 
		
		
		
		if((channel = event.getGuild().getDefaultChannel()) != null); {
			channel.sendMessage("Ein Agent wurde abtrünnig" + member.getAsMention()).queue();
		
		
		
		}
		
	}





}


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
