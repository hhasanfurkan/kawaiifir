module.exports = {
  name: "otorol",
  code: `
$setServerVar[otoroll;$mentionedRoles[1]]
  $setServerVar[otorollog;$mentionedChannels[1]]
  $description[**Otorol Kanalı:** $channelName[$mentionedChannels[1]]
  **Otorol Rolü:** $roleName[$mentionedRoles[1]] **Olarak Ayarlanmıştır!**]
  $onlyPerms[admin;**$customEmoji[pcross] | Otorol Komutunu Kullanmak için Yetkin Bulunmamakta!**]
  $onlyIf[$message[2]!=;**$customEmoji[ptick] | Doğru Kullanım: \`kf-otorol @rol @log\`**]
$onlyIf[$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/820554806116483091/voted/$authorid;hasvote]==true;{title:Oy Verme Zamanı!}{description:**Bu komutu kullanabilmek için [Bota Oy Vermeniz](https://tandembotxyz.beratozen.repl.co/bot/820554806116483091/vote) gerekmektedir. Oy Vermek için [Tıkla](https://tandembotxyz.beratozen.repl.co/bot/820554806116483091/vote)**}{color:RED}{footer:Unutma 12 Saatte Bir Oy Verebilirsin}]
   `
}