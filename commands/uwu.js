const uwu = require('owoifyx');

module.exports = {
    name: 'uwu',
    usage: 'a!uwu text',
    desc: '(UwU)',
    execute(message, args) {
        wholeS = args.join(' ');
        message.channel.send(uwu(wholeS));
    }
}