module.exports = ({
name: "ban", 
code: `$ban[$mentioned[1];$noMentionMessage]
$color[GREEN]
$image[https://media.discordapp.net/attachments/814916013271154768/839842638357594152/3e338c571d892f18f401369d08e24091.gif]
$description[<@$mentioned[1]>, **$username Tarafından Banlandı!**

**Sebep:** \`$replaceText[$replaceText[$checkCondition[$replaceText[$message;$message[1];;-1]==];true;Sebep Girilmedi!;-1];false;$replaceText[$message;$message[1];;-1];-1]\`]
$onlyPerms[ban;{title:Hata}{description:**Bu Komutu Kullanabilmek için \`"Üyeleri Engelle"\` Yetkisine Sahip Olman Gerekiyor!**}{color:RED}{image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
$onlyBotPerms[ban;{title:Hata}{description:**Bu Komutu Kullanabilmek için \`"Üyeleri Engelle"\` Yetkisine Sahip Olmam Gerekiyor!**}{color:RED}
{image:https://cdn.discordapp.com/attachments/775822548519616562/823197796286595072/unknown.png}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$mentioned[1]]]];Kendinden Üst Yetkiye Sahip Kişiyi Banlayamazsın oç.]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$mentioned[1]]]];ulan andavallı benim rolümden yüksek roldeki adamı nasıl banlayiym özürlü piç]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross] **Lütfen Banlamam için Birini Etiketle!**]` 
})