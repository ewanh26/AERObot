module.exports = async (client) => {
    const server = client.guilds.cache.get('786722960080633886');

    setInterval(() => {
        const memberCount = server.memberCount;
        const channel = server.channels.cache.get('795265617976492072');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('MEMBERCOUNT_UPDATE');
    }, 15000);
}