const Discord = require("discord.js");
const fetch = require("node-fetch");
const db = require("wio.db")

module.exports = {
    name: "talk",
    aliases: ['t'],
    usage: "talk <Stuff to talk about>",
    description: "Talk to the bot",
    run: async (client, message, args) => {
        let mesg = args.join(" ");
        if (!mesg) return message.channel.send("Enter a message for me to answer to");

        fetch(`http://api.brainshop.ai/get?bid=154409&key=iaRW35CrLdHBpOBW&uid=1&msg=${encodeURIComponent(mesg)}`)
        .then(res => res.json())
        .then(data => {
            const embed = new Discord.MessageEmbed()
            .setTitle("Response from Bot")
            .setDescription(data.cnt)
            .setColor("GREEN")
            message.channel.send(embed)
        })



    }
}
