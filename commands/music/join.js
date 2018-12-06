const commando = require ("discord.js-commando");

class joinCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: "join",
                group: "music",
                memberName: "join",
                description: "joins channel"
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
                    message.channel.send("joined "+ message.member.voiceChannel.name+" hello "+message.member.voiceChannel.members.toString());
                })
            }
        }
        
        else
        {
            message.reply("Must be in voice channel");
        }
    }

}

module.exports = joinCommand