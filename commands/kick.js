module.exports = {
    name: 'kick',
    usage: 'a!kick @member',
    desc: 'Kicks member from the server.',
    execute(message, args, DISCORD) {
        let eligible = message.member.permissions.has('KICK_MEMBERS');
        const member = message.mentions.users.first();
        const member_ = message.mentions.members.first();
        const embed_KICK = new DISCORD.MessageEmbed()
            .setColor('#EF1414')
            .setTitle('Kick')
            .setDescription('Bye!')
            .addFields(
                {
                    name: 'Action: ', value: 'Kicked'
                },
                {
                    name: 'Member: ', value: `${member}`
                }
            )
            .setImage('https://media3.giphy.com/media/l3V0j3ytFyGHqiV7W/giphy.gif?cid=ecf05e47afesyzze7pufkpkm1uf7bk63kygrnuqum8rxu0a9&rid=giphy.gif');

        if (eligible) {
            if (!member) return message.channel.send('Please specify a member to kick, or an existant member.');

            const memberID = message.guild.members.cache.get(member.id);

            if (!member_.roles.cache.some(r => r.name === 'Admin')) {
                memberID.kick();
                message.channel.send(embed_KICK)
            } else {
                message.channel.send('You cannot kick Admins');
            }
        } else {
            message.channel.send('You do not have the sufficient permissions to commit this action.');
        }
    }
}