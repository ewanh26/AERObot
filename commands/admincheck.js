module.exports = {
    name: 'admincheck',
    usage: 'a!admincheck',
    desc: 'Checks if the member owns the \'Admin\' role.',
    execute(message, args) {
        let Admin = message.member.roles.cache.some(r => r.name === 'Admin');

        if (Admin) {
            message.channel.send('You are an Admin');
        } else {
            message.channel.send('You are not an Admin');
        }
    }
}