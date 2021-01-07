module.exports = {
    name: 'ban',
    usage: 'a!ban @member <reason (optional)>',
    desc: 'Bans member from the server.',
    execute(message, args, DISCORD) {
        let eligible = message.member.permissions.has('BAN_MEMBERS');
        const member = message.mentions.users.first();
        const member_ = message.mentions.members.first();
        const targetIsAdmin = member_.roles.cache.some(r => r.name === 'Admin');
        const embed_BAN = new DISCORD.MessageEmbed()
            .setColor('#FFCE00')
            .setTitle('Ban')
            .setDescription('Imagine getting banned.')
            .addFields(
                {
                    name: 'Action: ', value: 'Banned'
                },
                {
                    name: 'Member: ', value: `${member}`
                }
            )
            .setImage('https://media.giphy.com/media/3XiQswSmbjBiU/giphy.gif');

        if (eligible) {
            if (!member) return message.channel.send('Please specify a member to ban, or an existant member.');

            const memberID = message.guild.members.cache.get(member.id);

            if (!targetIsAdmin) {
                if (args[1]) {
                    memberID.ban(args.slice(0, args.length).join(' '));
                } else {
                    memberID.ban();
                }
                message.channel.send(embed_BAN);
            } else {
                message.channel.send('You cannot ban Admins');
            }
        } else {
            message.channel.send('You do not have the sufficient permissions to commit this action.');
        }
    }
}