module.exports = {
    name: 'request',
    usage: 'a!request <your request>',
    desc: 'Makes a formal request for the server, that goes directly to the Admins',
    execute(message, args, DISCORD, client) {
        const server = client.guilds.cache.get('786722960080633886');
        const requestChannel = server.channels.cache.get('796767132628942860');
        const requestEmbed = new DISCORD.MessageEmbed()
        .setColor('#3377AA')
        .setTitle('Request sent!')
        .setDescription('The Admins will get back to you soon!')
        .setImage('https://media1.tenor.com/images/49c81401a7a05013aeed8e8edb0875e0/tenor.gif?itemid=3561207');

        if (!args[1]) {
            message.channel.send('Please enter a request');
        } else {
            message.channel.send(requestEmbed);
            requestChannel.send(`Request from ${message.author.toString()}: ${args.slice(0, args.length).join(' ')}`);
        }
    }
}