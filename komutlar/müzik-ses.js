module.exports = ({
  name:"ses",
  aliases:['sound','voice'],
 code:`
$addCmdReactions[🔊]
$volume[$message]
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross] | **Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$voiceID!=;$customEmoji[pcross] | **Bir Ses Kanalına Girmezsen Kullanamazsın!**]
$suppressErrors[$customEmoji[pcross] | **Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$message<=100;Maximum 100 olarak ayarlanabilir]
$onlyIf[$isNumber[$message]!=false;$customEmoji[pcross] | **Bir Sayı Girmelisin!**]
$argsCheck[1;$customEmoji[pcross] | Lütfen Bir Ses Seviyesi Gir!**]
$onlyForIDs[$getServerVar[şarkı];$customEmoji[pcross] | **Bu Komutu Sadece Şarkıyı Başlatan \`$userTag[$getServerVar[şarkı]]\` Kullanıcısı Kullanabilir**]`
})