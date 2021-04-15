module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	execute(message) {
		message.channel.send(`Servidor: ${message.guild.name}\nTotal de membros: ${message.guild.memberCount}`);
	},
};