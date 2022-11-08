const { SlashCommandBuilder } = require('discord.js');

const request = require('node-superfetch');

const Discord = require("discord.js");

module.exports = { data: new SlashCommandBuilder()
  .setDMPermission(false)
  .setName('bully')
  .setDescription('Bully A Fellow User')
  .addUserOption(option => option.setName('user').setDescription('Enter Name').setRequired(true)),

async execute(interaction) { 
  const data = await request.get('http://tomtomvader298.uk/api/JSON/bully.json');
  const text = JSON.parse(data.text);
  const target = interaction.options.getUser('user');
  let answer = text[Math.floor(Math.random() * text.length)];
  let bully = new Discord.EmbedBuilder().setColor("#2F3136")
    .setDescription(`**${interaction.user.username} Bullied ${target} It Went Like This:**`).addFields({name: "\u200b" , value:`**${answer}**`})

  return interaction.reply({ embeds: [bully] })
}, };