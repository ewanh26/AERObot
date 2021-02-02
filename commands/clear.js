module.exports = {
    name: 'clear',
    usage: 'a!clear <number>',
    desc: 'clears certain amount of messages in chat. Clears all by default.',
    async execute(message, args) {
        let Admin = message.member.roles.cache.some(r => r.name === 'Admin');

        if (Admin) {
            if (!args[0]) {
                await message.channel.messages.fetch().then(messages => {
                    message.channel.bulkDelete(messages);
                });

                return;
            }

            if (isNaN(args[0]) || args[0] < 1) return message.reply('Please enter a real, positive number.')
            
            let limit = args[0] + 1;

            await message.channel.messages.fetch({ limit: limit }).then(messages => {
                message.channel.bulkDelete(messages);
            });
        } else {
            message.channel.send('You do not have sufficient permissions to do this.')
        }
    }
}