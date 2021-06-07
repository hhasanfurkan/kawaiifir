module.exports = ({
  name:"bass",
  aliases:['Bass','BASS'],
 code:`
$addCmdReactions[🔊]
$volume[$message]
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross] | **Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$voiceID!=;$customEmoji[pcross] | **Bir Ses Kanalına Girmezsen Kullanamazsın!**]
$suppressErrors[$customEmoji[pcross] | **Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$isNumber[$message]!=false;**\`0 ile ∞\` Arasında Bir Bass Seviyesi Girmelisin!**]
$argsCheck[1;**\`0 ile ∞\` Arasında Bir Bass Seviyesi Girmelisin!**]
$onlyForIDs[$getServerVar[şarkı];$customEmoji[pcross] | **Bu Komutu Sadece Şarkıyı Başlatan \`$userTag[$getServerVar[şarkı]]\` Kullanıcısı Kullanabilir!**]`
})