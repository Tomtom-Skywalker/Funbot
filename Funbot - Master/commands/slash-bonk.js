const { SlashCommandBuilder } = require('discord.js');

const request = require('node-superfetch');

const Discord = require("discord.js");

module.exports = { data: new SlashCommandBuilder()
  .setDMPermission(false)
  .setName('bonk')
  .setDescription('Bonk A Fellow User, Send Them To Horny Jail')
  .addUserOption(option => option.setName('user').setDescription('Enter Name').setRequired(true)),

async execute(interaction) { 
  const data = await request.get('http://tomtomvader298.uk/api/JSON/bonk.json');
  const text = JSON.parse(data.text);
  const target = interaction.options.getUser('user');
  let answer = text[Math.floor(Math.random() * text.length)];
  let bonk = new Discord.EmbedBuilder().setColor("#2F3136")
    .setDescription(`**${interaction.user.username} Bonked ${target} It Went Like This:**`).setImage(`${answer}`)

  return interaction.reply({ embeds: [bonk] })
}, };