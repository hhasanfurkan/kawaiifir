module.exports = ({
  name:"sıralama",
  aliases:['queue'],
 code:`$description[
 **Şuanda Çalan: \`[$songInfo[title]]($songInfo[url])\`**
 **Şarkıyı Açan:** <@$songInfo[userID]>
 --------------------------------------
 **Sıralama:**
 $queue[1;15;{number} - {title}]]
 $color[303136]
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross] | **Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$voiceID!=;$customEmoji[pcross] | **Bir Ses Kanalına Girmezsen Kullanamazsın!**]
 $onlyIf[$queue[1;10;{number} - {title}]!=;$customEmoji[pcross] | **Sırada Bir Müzik Bulunmuyor!**]
 $suppressErrors[$customEmoji[pcross] | **Müzik Çalmazken Kullanamazsın!**]`
})