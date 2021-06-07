module.exports = {
name:"slowmode",
aliases:['slow-mode','yaşaş-mod','yaşaşmod'],
code:`
**$customEmoji[ptick] <#$channelID> Adlı Kanalda Yavaş Mod \`$message[1]\` Olarak Ayarlandı!**
$onlyIf[$isNumber[$message[1]]!=false;$customEmoji[pcross] **Lütfen Bir Sayı Belirtin!**]
$onlyIf[$message[1]!=;$customEmoji[ptick] **Doğru Kullanım: $getServerVar[Prefix]slowmode <değer>]
$slowmode[$channelID;$message[1]s]
$onlyPerms[managechannels;$customEmoji[pcross] **Yavaş Mod Ayarlamak için Yetkin Bulunmamakta**]
$onlyBotPerms[managechannels;$customEmoji[pcross] **Yavaş Mod Ayarlamak için \`Kanalları Yönet\` İznim Olmalı!**] 
`
}