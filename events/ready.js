const cron = require("node-cron");
const { sendServers } = require('../functions');

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
        console.info(`[INFO] Bot online - ${client.user.tag} (${client.user.id})`)
        client.user.setStatus('online');
        cron.schedule("44 * * * *", async function() {
            client.logs.send(`[RUNNER] Envoi des serveurs en cours !`)
            console.info(`[RUNNER] Started sending servers`);
            await sendServers(client)
            console.info(`[RUNNER] Finished sending servers`);
            client.logs.send(`[RUNNER] Envoi des serveurs terminé !`)
        });
    }
}
