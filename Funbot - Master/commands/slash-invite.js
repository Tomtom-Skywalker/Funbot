const Discord = require("discord.js");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('invite')
		.setDescription('INVITE ME!'),
	async execute(interaction) {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setURL(`https://discord.com/api/oauth2/authorize?client_id=${interaction.client.user.id}&permissions=8&scope=bot%20applications.commands`)
					.setLabel('INVITE ME')
					.setStyle(ButtonStyle.Link)
					.setEmoji('✨')
					.setDisabled(false),
			)
		let invite = new Discord.EmbedBuilder().setTitle("Invite Me To Your Server! ").setColor("#2F3136")
			.setDescription("**WOAH I HAVE BEEN INVITED TO A NEW SERVER COOL!**\n** ```diff\n+Thanks For Using This Command Its Supporting Me And My Developer\n```**").addFields({ name: "**Thank You For The Use Of This Command**", value: "**Once I Have Been Added You Can Use Me, But Cannot Abuse Me!**" })
			.setFooter({ text: `Command Request By: ${interaction.member.user.username} |Tomtomvader298 Was Here` }).setTimestamp()
		return interaction.reply({ embeds: [invite], components: [row] });
	},
};


