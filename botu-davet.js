const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  const davet = new Discord.RichEmbed()
.setColor("#f65026")
.setAuthor(message.author.username, message.author.avatarURL)
.setDescription("Selam Botumuzu Davet Etmek İçin Altaki `Bana Tıkla!` Yazan Yere Basınız. Sorun Veya Hatalar Olursa Destek Sunucumuza Gelip Bildiriniz")

.addField(`Botu Davet Etmek İçin`,`[Bana Tıkla!](Buraya Botun Davet Linkini Koyun)`, true)
    
.addBlankField(true)
.addField(`Destek Sunucuma Gelmek İçin`,`[Bana Tıkla!](Buraya Discord Sunucu Linkini Koyun)`, true)


message.channel.send(davet)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["linkler","bot-davet","invite","bot-invite"],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  category: 'kullanıcı',
  description: "Davet Linklerini Gösterir"
};
