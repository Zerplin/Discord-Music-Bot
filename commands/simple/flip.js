const commando = require ("discord.js-commando");

class coinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,
            {
                name: "flip",
                group: "simple",
                memberName: "flip",
                description: "flips coin return random state"
            });
    }

    async run(message, args)
    {
        var flip = Math.floor(Math.random()*2)

        if(flip==0)
        {
            message.reply("heads");
        }
        
        else
        {
            message.reply("tails");
        }
    }

}

module.exports = coinFlipCommand