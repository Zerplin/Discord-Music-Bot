const commando = require ("discord.js-commando");
const ytdl = require("ytdl-core");

/*
function Play(connection, message)
{
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0],filter: "audioonly"))
}
*/
class playCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: "play",
                group: "music",
                memberName: "play",
                description: "takes youtube url and plays it in voice channel"
            });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.member.guild.voiceConnection)
            {
    
                message.member.voiceChannel.join()
                .then(connection =>{
                    message.channel.send("playing in "+ message.member.voiceChannel.name);
                })
            }
        }
        
        else
        {
            message.reply("Both user and bot must be in the same voice channel");
        }
    }

}

module.exports = playCommand