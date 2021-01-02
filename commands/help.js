module.exports = {
    name: 'help',
    usage: 'a!help',
    desc: 'Displays instructions on commands',
    execute(message, args, DISCORD, client) {
        const helpEmbed = new DISCORD.MessageEmbed()
        .setColor('#FFBB11')
        .setTitle('Help!');

        for (cmd of client.commands) {
            helpEmbed.addFields(
                {
                    name: cmd[1]['usage'],
                    value: cmd[1]['desc']
                }
            )
        }
        message.channel.send(helpEmbed);
    }
}