module.exports = {
    name: 'request',
    usage: 'a!request <your request>',
    desc: 'Makes a formal request for the server, that goes directly to the Admins',
    execute(message, args, DISCORD, client) {
        const server = client.guilds.cache.get('786722960080633886');
        const requestChannel = server.channels.cache.get('796767132628942860');

        if (!args[1]) {
            message.channel.send('Please enter a request');
        } else {
            requestChannel.send(`Request from ${message.author.toString()}: ${args.slice(0, args.length).join(' ')}`)
        }
    }
}