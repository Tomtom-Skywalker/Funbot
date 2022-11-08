const { SlashCommandBuilder } = require('discord.js');

const request = require('node-superfetch');

const Discord = require("discord.js");

module.exports = { data: new SlashCommandBuilder()
  .setDMPermission(false)
  .setName('mha')
  .setDescription('Get A Random Mental Health Awareness Quote'),

async execute(interaction) { 
  const data = await request.get('http://tomtomvader298.uk/api/JSON/mha.json');
  const text = JSON.parse(data.text);


  let answer = text[Math.floor(Math.random() * text.length)];
  let quote = new Discord.EmbedBuilder().setColor("#2F3136")
    .setDescription(`**MHA: ${answer}**`)

  return interaction.reply({ embeds: [quote] })
}, };