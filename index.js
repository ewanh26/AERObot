const DISCORD = require("discord.js");

const FS = require("fs");

const client = new DISCORD.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
client.commands = new DISCORD.Collection();

const commandFiles = FS.readdirSync("./commands").filter(file =>
  file.endsWith(".js")
);
for (let file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const memberCounter = require("./counters/member_counter");

const prefix = "a!";
//TODO: ADD UPPERCASE command CALLS

client.once("ready", () => {
  console.log("AERO Bot is now online.");
  memberCounter(client);
  client.user.setActivity("type a!help", { type: "PLAYING" });
});

client.on("message", message => {
  if (message.mentions.has(client.user))
    message.channel.send(
      "Hi, I'm AERO. type `a!help` if you're confused.\nMy prefix here is `a!`"
    );
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case "ping":
      client.commands.get("ping").execute(message, args);
      break;
    case "info":
      client.commands.get("info").execute(message, args);
      break;
    case "admincheck":
      client.commands.get("admincheck").execute(message, args);
      break;
    case "kick":
      client.commands.get("kick").execute(message, args, DISCORD);
      break;
    case "ban":
      client.commands.get("ban").execute(message, args, DISCORD);
      break;
    case "clear":
      client.commands.get("clear").execute(message, args);
      break;
    case "mute":
      client.commands.get("mute").execute(message, args);
      break;
    case "unmute":
      client.commands.get("unmute").execute(message, args);
      break;
    //case 'reactionrole':
    //  client.commands.get('reactionrole').execute(message, args, DISCORD, client);
    //break;
    case "help":
      client.commands.get("help").execute(message, args, DISCORD, client);
      break;
    case "pog":
      client.commands.get("pog").execute(message, args);
      break;
    case "request":
      client.commands.get("request").execute(message, args, DISCORD, client);
      break;
    case "uwu":
      client.commands.get("uwu").execute(message, args);
      break;
    case "setbump":
      client.commands.get("setbump").execute(message, args, DISCORD);
      break;
  }
});

client.on("guildMemberAdd", guildMember => {
  let welcomeRole = guildMember.guild.roles.cache.find(
    r => r.name === "Member"
  );
  guildMember.roles.add(welcomeRole);
  guildMember.guild.channels.cache
    .get("786722960080633889")
    .send(`Welcome, ${guildMember}!`);
});

client.on("messageDelete", message => {
  message.channel.send("deleted message? sus");
});

client.on("guildMemberRemove", guildMember => {
  guildMember.guild.channels.cache
    .get("786722960080633889")
    .send(`${guildMember} has departed!`);
});

client.login(process.env.token);
