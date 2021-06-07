module.exports = {
  name: "sayaç",
  code: `
  $onlyPerms[admin;**$customEmoji[pcross] | Sayaç Komutunu Ayarlamak için Yetkin Bulunmamakta!**]
  $onlyIf[$isNumber[$message[2]]!=false;**$customEmoji[pcross] | Ayarlanan Hedef Bir Sayı Değil!**]
  $onlyIf[$message!=;**$customEmoji[ptick] | Doğru Kullanım: \`kf-sayaç #kanal hedef\`**]
  $setServerVar[sayaçlog;$mentionedChannels[1]]
  $setServerVar[sayaç;$noMentionMessage]
  $description[**Sayaç  Kanalı:** <#$mentionedChannels[1]>
  **Hedef Kişi Sayısı: \`$noMentionMessage\` Olarak Ayarlanmıştır!**]
  $suppressErrors[$customEmoji[pcross] | **Girdiğin Bir Sayı Değil!**]
$onlyIf[$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/820554806116483091/voted/$authorid;hasvote]==true;{title:Oy Verme Zamanı!}{description:**Bu komutu kullanabilmek için [Bota Oy Vermeniz](https://tandembotxyz.beratozen.repl.co/bot/820554806116483091/vote) gerekmektedir. Oy Vermek için [Tıkla](https://tandembotxyz.beratozen.repl.co/bot/820554806116483091/vote)**}{color:RED}{footer:Unutma 12 Saatte Bir Oy Verebilirsin}]
  
  `
}