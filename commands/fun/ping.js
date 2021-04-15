module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, client){
        message.channel.send(`Pingando...`).then(sent=>{
            sent.edit(`Pong... ${sent.createdTimestamp - message.createdTimestamp}ms`);
        });
    }
}