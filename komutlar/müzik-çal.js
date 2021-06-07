module.exports = ({
  name:"çal",
  aliases:['play'],
 code:`$author[Müzik Çalmaya Başlıyor;$authorAvatar]
$description[$customEmoji[pikachuhawl] **Aranan Müzik:** \`$message\`
$customEmoji[typing] **Bulunan Müzik:** $replaceText[$get[şarkı];;$songInf[title];-1]
$customEmoji[aamongdans] **Müzik Açıklaması:** \`$songInfo[description]\`
$customEmoji[awow] **Müzik uzunluğu:** \`$replaceText[$replaceText[$songInfo[duration];Seconds;Saniye;-1];Second;Saniye;-1]\`
$customEmoji[ayuklenyorr] **Müzik Linki:** [Tıkla]($songInfo[url])
$customEmoji[emoji_90] **Müzik Kanalı:** [$songInfo[publisher]]($songInfo[publisher_url])
$customEmoji[aarazordiamond] **Çalan Kişi:** \`$userTag[$authorID]\`]
$thumbnail[$songInfo[thumbnail]]
$color[303136]
$footer[Aradığınız Şarkı Sıraya Eklendi Sıraya Bakmak için kf-queue Yazın]
$setServerVar[şarkı;$authorID]
$let[$playSong[$message;...;yes;yes;:x: **\`$message\` Adında Bir Müzik Bulamadım!**]]
$suppressErrors[**Müzik Çalmazken Kullanamazsın!**]
$onlyIf[$voiceID!=;**Bir Ses Kanalına Girmezsen Kullanamazsın!**]
$argsCheck[>1;**Lütfen Bir Müzik Adı Gir!**]`
}) 