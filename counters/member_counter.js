module.exports = async (client) => {
    const server = client.guilds.cache.get('772906763925454938');

    setInterval(() => {
        const memberCount = server.memberCount;
        const channel = server.channels.cache.get('794542223487795217');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('MEMBERCOUNT_UPDATE');
    }, 15000);
}