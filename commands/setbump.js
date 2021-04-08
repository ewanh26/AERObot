module.exports = {
  name: "setbump",
  usage: "a!setbump",
  desc: "Bumps every 120 minutes in the channel you used this command in",
  execute(message, DISCORD) {
    const bumpChannel = message.channel;
    const embed_BUMP = DISCORD.MessageEmbed()
      .setColor("#5efcff")
      .setTitle("Will bump here!");
    const eligible = message.author.roles.cache.some((r) => r.name === "Admin");

    if (eligible) {
      bumpChannel.send(embed_BUMP);
      bumpChannel.send("!d bump");
      setInterval(() => {
        bumpChannel.send("!d bump");
      }, 720000);
    } else {
      bumpChannel.send("Sorry, you don't have the permission to do that");
    }
  },
};
