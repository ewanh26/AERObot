module.exports = {
    name: 'unmute',
    usage: 'a!unmute @member',
    desc: 'This unmutes a member; removes them from the \'Muted\' role.',
    execute(message, args, DISCORD) {
        const member = message.mentions.users.first();
        let Admin = message.member.roles.cache.some(r => r.name === 'Admin');
        let memberRole = message.guild.roles.cache.find(r => r.name === 'Member');
        let muteRole = message.guild.roles.cache.find(r => r.name === 'Muted');
        let memberID = message.guild.members.cache.get(member.id);

        if (Admin) {
            if (!member) return message.channel.send('Please specify a member to mute, or an existant member.');

            memberID.roles.remove(muteRole);
            memberID.roles.add(memberRole);
            message.channel.send(`${member}'s plea for Free Speech has been granted.`);
        } else {
            message.channel.send('You do not have the sufficient permissions to commit this action.')
        }
    }
}