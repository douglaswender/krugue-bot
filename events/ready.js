const repository = require("../utils/repository");


module.exports = {
	name: 'ready',
	once: true,
	async execute(client, database) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setActivity('kruguebrabo.com.br', { type: 'PLAYING' });
		var patchChannel = client.channels.cache.get('668808435579486220');
		setInterval(async () => {
			const patchVersion = await repository.getLastPatchVersion();
			const storedVersion = await repository.getAllPatchVersions(database);
			if (patchVersion !== storedVersion) {
				console.log('diferente');
				patchChannel.send(`SE LIGA NO PATCH NOTES\nLOL: https://br.leagueoflegends.com/pt-br/news/game-updates/notas-da-atualizacao-${patchVersion.replace('.', '-')}/`);
				patchChannel.send(`TFT: https://br.leagueoflegends.com/pt-br/news/game-updates/notas-da-atualizacao-${patchVersion.replace('.', '-')}-do-teamfight-tactics/`);
				await repository.postLastPatchVersion(patchVersion, database);
			} else {
				console.log('Atualizado!');
			}
		}, 60 * 60 * 1000);
	},
};