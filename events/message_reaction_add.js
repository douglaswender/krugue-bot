module.exports = {
    name: 'messageReactionAdd',
    async execute({ message, _emoji }, user) {
        if (user.bot || message.id !== '832242947248095282') {
            return;
        }

        if (message.partial) {
            try {
                await message.fetch();
            } catch (error) {
                console.error('Something went wrong when fetching the message: ', error);
                return;
            }
        }
        const { guild } = message;

        const member = guild.members.cache.get(user.id);
        const role = guild.roles.cache.find((role) => role.name === "LOL");

        if (message.channel.name === "🚀・reagir") {
            if (!role) {
                console.error(`Cargo não encontrado para '${_emoji.name}'`);
            }

            try {
                //console.log(role);
                await member.roles.set([role.id]);
            } catch (err) {
                console.log('Erro ao adicionar o cargo: ', err);
            }
        }

        // console.log(`react`);
        // console.log(data);
        // if(data.id === "832242947248095282"){
        //     console.log("KEKW");
        //     let role = message.guild.roles.cache.find((role)=>role.name==="LOL");
        //     if(message.channel.name === "🚀・reagir"){
        //         console.log('ok');
        //         message.member.addRole(role.id);
        //     }
        // }
    }
};