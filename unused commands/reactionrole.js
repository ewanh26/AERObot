module.exports = {
  name: "reactionrole",
  usage: "a!reactionrole",
  desc: "enables reaction roles",
  async execute(message, args, DISCORD, client) {
    const channel = "772907971365306368";
    const gamerRole = message.guild.roles.cache.find(
      (r) => r.name === "Gamers"
    );
    const karenRole = message.guild.roles.cache.find(
      (r) => r.name === "Karens"
    );
    const gamerEmoji = "🎮";
    const karenEmoji = "👩";

    let roleEmbed = new DISCORD.MessageEmbed()
      .setTitle("Reaction Roles")
      .setColor("#F7CE10")
      .setDescription(
        "Choose a role!\n\n" +
          `${gamerEmoji} for Gamers\n` +
          `${karenEmoji} for Karens\n`
      );

    let messageEmbed = await message.channel.send(roleEmbed);
    messageEmbed.react(gamerEmoji);
    messageEmbed.react(karenEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;
      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name == gamerEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(gamerRole);
        }
        if (reaction.emoji.name == karenEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.add(karenRole);
        }
      } else return;
    });

    client.on("messageReactionRemove", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (user.bot) return;
      if (!reaction.message.guild) return;
      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === gamerEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(gamerRole);
        }
        if (reaction.emoji.name === karenEmoji) {
          await reaction.message.guild.members.cache
            .get(user.id)
            .roles.remove(karenRole);
        }
      } else return;
    });
  },
};
