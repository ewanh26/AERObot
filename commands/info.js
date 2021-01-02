module.exports = {
    name: 'info',
    usage: 'a!info',
    desc: 'Gives info about the bot.',
    execute(message, args) {
        message.channel.send("Discord bot from AERO AI, made with JavaScript. Powered by Node.js runtime server and the Discord.js module");
    }
}