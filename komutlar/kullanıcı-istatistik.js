module.exports = {
  name:"istatistik",
  aliases:['i','İstatistik'],
  code:`
  $color[ffccff]
$author[**$serverName[$guildID]** Sunucu Analizi;$serverIcon]
$description[$thumbnail[$serverIcon]
 
 $addField[Sunucudaki Emoji Sayısı **$emojiCount**;$getServerVar[prefix]emojiler İle Bakabilirsiniz]
 $addField[Sunucudaki Rol Sayısı **$roleCount**;$getServerVar[prefix]roller İle Bakabilirsiniz]
 $addField[Sunucudaki Takviye Sayısı;**$serverBoostCount**;yes]
 $addField[Kullanıcı Bilgi **$membersCount**;<:online:786004237707902986> $membersCount[$guildID;$membersCount] <:idle:786004463554920448> 
 $addField[👑 Sunucu Sahibi;<@$ownerID>;yes] $addField[Kanallar **$sub[$channelCount;$channelCount[category]]**;<:text:786002355832225802> **$channelCount[text]** <:sesli:786002393375440927> **$channelCount[voice]** <:kategori:786002421599699024> **$channelCount[category]**;yes]
]
`
}