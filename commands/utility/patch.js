const repository = require('../../utils/repository');

module.exports = {
    name: 'patch',
    description: 'Patch notes!',
    async execute(message) {
        repository.getLastPatchVersion().then(response => {
            if (response !== null) {
                message.channel.send(`Estamos no patch ${response}`);
                message.channel.send(`LOL: https://br.leagueoflegends.com/pt-br/news/game-updates/notas-da-atualizacao-${patchVersion.replace('.', '-')}/`);
				message.channel.send(`TFT: https://br.leagueoflegends.com/pt-br/news/game-updates/notas-da-atualizacao-${patchVersion.replace('.', '-')}-do-teamfight-tactics/`);
            }
        });
    },
}