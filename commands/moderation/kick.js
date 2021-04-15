module.exports = {
	name: 'kick',
	description: 'Tag a member and kick them (but not really).',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.reply('Você precisa marcar um usuário para desconectar ele!');
		}

		const taggedUser = message.mentions.users.first();

		message.channel.send(`Você quer desconectou: ${taggedUser.username}`);
		taggedUser.kick();
	},
};