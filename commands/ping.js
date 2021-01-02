module.exports = {
    name: 'ping',
    usage: 'a!ping',
    desc: 'pong!',
    execute(message, args) {
        message.channel.send("pong!");
        message.reply('Yummy, You gave me your empty tube of Pringles!');
    }
}