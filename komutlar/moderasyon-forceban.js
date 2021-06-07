module.exports = {
  name:"forceban",
  code:`
  $suppressErrors[**Bu ID'ye Sahip Bir Kullanıcı Bulunamadı**]
  $image[https://media.discordapp.net/attachments/814916013271154768/839842638357594152/3e338c571d892f18f401369d08e24091.gif]
  $ban[$message[1]]
  $description[**\`$username[$message[1]]#$discriminator[$message[1]]\` Kişisi Sunucudan \`Force-Ban\` İle Yasaklanmıştır!**]
  $onlyIf[$isNumber[$message[1]]!=false;**Girdiğin Bir \`ID\` Değil!**]
  $onlyIf[$message!=;**Bir ID Girmelisiniz !**]
  $onlyPerms[ban;{title:Hata}{description:**Bu Komutu Kullanabilmek için \`"Üyeleri Engelle"\` Yetkisine Sahip Olman Gerekiyor!**}{color:RED}                           {image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
  $onlyBotPerms[ban;{title:Hata}{description:**Bu Komutu Kullanabilmek için \`"Üyeleri Engelle"\` Yetkisine Sahip Olmam Gerekiyor!**}{color:RED}
  {image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
  `
}