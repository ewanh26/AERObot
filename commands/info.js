module.exports = {
    name: 'info',
    usage: 'a!info',
    desc: 'Gives info about the bot.',
    execute(message, args) {
        message.channel.send("Discord bot from AERO AI, made with JavaScript. Powered by Node.js runtime and the Discord.js module. Runs on a Heroku server 24/7.");
    }
}