require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER'] })
const PREFIX = '$'
const fs = require('fs');

client.on('ready', () => {
  console.log(`${client.user.username} is logged in.`);
})

const write = async (data) => {
  data += "\n";
  await fs.appendFile('./log.log', data, err => {
    if(err){
      console.error(err);
    }
  })
}

client.on('message', (message) => {
  if(message.author.bot) return 
  if (message.content.startsWith(PREFIX)){
    const [CMD_NAME, ...args] = message.content
    .trim()
    .substring(PREFIX.length)
    .split(/\s+/);
    
    if (CMD_NAME === 'wordle'){
      const wordle = args[0];
      if (wordle === undefined) {
        write(String(wordle));
        return message.reply("please provide the wordle")
      }
      if(wordle){
        write(String(wordle))
        return message.reply(wordle)
      }
    }
    if (CMD_NAME === 'reactionClear'){
        
      }
  }
});

client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id)
  const username = reaction.message.guild.members.cache.get(user.username);
  if (reaction.message.id === '1007039474045309060'){
    switch (name){
      case '1️⃣':
        member.roles.add('1005998524523098243');
        console.log(username, "is added to the 1 gang");
        break;
      case '2️⃣':
        member.roles.add('1005999079265931374');
        console.log(username, "is added to the 2 gang");
        break;
      case '3️⃣':
        member.roles.add('1005999146060218399');
        console.log(username, "is added to the 3th gang");
        break;
      case '4️⃣':
        member.roles.add('1005999206697271296');
        console.log(username, "is added to the 4 gang");
        break;
      case "5️⃣":
        member.roles.add('1005999245750435840');
        console.log(username, "is added to the 5 gang");
        break;
      case "6️⃣":
        member.roles.add('1005999296203722783');
        console.log(username, "is added to the 6 gang");
        break;
      case "🇱":
        member.roles.add('1005999344505335849');
        console.log(username, "is added to the L gang");
        break;
    }
  }
})

client.login(process.env.DISCORD_TOKEN);