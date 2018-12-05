const commando = require ("discord.js-commando");

class leaveCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: "leave",
                group: "music",
                memberName: "leave",
                description: "leaves channel"
            });
    }

    async run(message, args)
    {
        
         if(message.member.guild.voiceConnection)
         {
             message.channel.send("left "+ message.member.voiceChannel.name);
             message.guild.voiceConnection.disconnect()
         }
        
        else
        {
            message.reply("Must be in voice channel");
        }
    }

}

module.exports = leaveCommand