module.exports = ({
  name:"durdur",
  aliases:['stop','pause'],
 code:`
$addCmdReactions[⏸]
$pauseSong
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross] | **Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$voiceID!=;$customEmoji[pcross] | **Bir Ses Kanalına Girmezsen Kullanamazsın!**]
$suppressErrors[$customEmoji[pcross] | **Müzik Çalmazken Kullanamazsın!**]
$onlyForIDs[$getServerVar[şarkı];$customEmoji[pcross] | **Bu Komutu Sadece Şarkıyı Başlatan \`$userTag[$getServerVar[şarkı]]\` Kullanıcısı Kullanabilir!**]`
})