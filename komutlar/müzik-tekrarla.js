module.exports = ({
  name:"tekrarla",
  aliases:['loop'],
 code:`
$addCmdReactions[🔁]
$let[geç;$skipSong]
$let[şarkı;$playSong[$songInfo[title];...;yes;yes;:x: $customEmoji[pcross] | **\`$songInfo[title]\` Adında Bir Müzik Bulamadım!**]]
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross] | **Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$voiceID!=;$customEmoji[pcross] | **Bir Ses Kanalına Girmezsen Kullanamazsın!**]
$suppressErrors[$customEmoji[pcross] | **Müzik Çalmazken Kullanamazsın!**]
$onlyForIDs[$getServerVar[şarkı];$customEmoji[pcross] | **Bu Komutu Sadece Şarkıyı Başlatan \`$userTag[$getServerVar[şarkı]]\` Kullanıcısı Kullanabilir!**]`
})