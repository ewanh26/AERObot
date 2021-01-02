const ms = require('ms');

module.exports = {
    name: 'mute',
    usage: 'a!mute @member <time (optional) > s/m/h/...',
    desc: 'This mutes a member; adds them to the \'Muted\' role, for a specified amount of time. Mutes until manually unmuted by defualt. specify time in s/m/h',
    execute(message, args, DISCORD) {
        const member = message.mentions.users.first();
        let Admin = message.member.roles.cache.some(r => r.name === 'Admin');
        let memberRole = message.guild.roles.cache.find(r => r.name === 'Member');
        let muteRole = message.guild.roles.cache.find(r => r.name === 'Muted');
        let memberID = message.guild.members.cache.get(member.id);

        if (Admin) {
            const member = message.mentions.users.first();
            if (!member) return message.channel.send('Please specify a member to mute, or an existant member.');

            if (!args[1]) {
                memberID.roles.remove(memberRole);
                memberID.roles.add(muteRole);
                message.channel.send(`${member} has been shooshed until further notice!`);
                return;
            }

            memberID.roles.remove(memberRole);
            memberID.roles.add(muteRole);
            message.channel.send(`${member} has been shooshed for ${ms(ms(args[1]))}!`);

            setTimeout(function ()
            {
                memberID.roles.remove(muteRole);
                memberID.roles.add(memberRole);
                message.channel.send(`${member}! Time's up, you may speak...`);
                return;
            }, ms(args[1]));
        } else {
            message.channel.send('You do not have the sufficient permissions to commit this action.')
        }
    }
}