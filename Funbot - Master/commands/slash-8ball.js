const { SlashCommandBuilder } = require('discord.js'); 

const request = require('node-superfetch');

const Discord = require("discord.js"); 


module.exports = { data: new SlashCommandBuilder()
	.setDMPermission(false)
	.setName('8ball')
	.setDescription('Ask And You Shall Receive').addStringOption(option => option.setName('input')
	.setDescription('Your Question?')
    .setMinLength(20)
    .setMaxLength(500)
	.setRequired(true)),

  async execute(interaction) {
	
  const data = await request.get('http://tomtomvader298.uk/api/JSON/8ballresponses.json');
  const text = JSON.parse(data.text); 
  const input = interaction.options.getString("input")
  let answer = text[Math.floor(Math.random() * text.length)];
  let eball = new Discord.EmbedBuilder().setColor("#2F3136").setTitle(`You Asked: ${input}`).setDescription(`**Your Answer: ${answer}**`)                                                            
return interaction.reply({ embeds: [eball] }) }, };                