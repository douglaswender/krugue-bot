const repository = require('../../utils/repository');

module.exports = {
    name: 'patch',
	description: 'Patch notes!',
	async execute(message) {
        repository.getLastPatchVersion().then(response=>{
            if(response !== null) return message.channel.send(`Estamos no patch ${response}`);
        });
	},
}