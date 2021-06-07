module.exports = {
    name: "botengel-aç",
    code: `
    $setServerVar[botengel;açık]
    $setServerVar[botengellog;$mentionedChannels[1]]
    $title[Bot Engel Sistemi Başarı İle Açıldı]
    $description[$customEmoji[ptick] | **Artık Sunucuya Bot Giremiyicek**]
    $color[00FF00]
    $footer[Ayarlayan Kişi $username[$authorID];$authorAvatar] $addTimestamp
    $onlyIf[$getServerVar[botengel]!=açık;{title:Sistem Zaten Açık}{color:00FF00}] 
    $onlyPerms[admin;{title:Üzgünüm Yetkin Yok}{description:$customEmoji[pcross] | **Bu Özelliği Kullanmak İçin Şu Yetkiye Sahip Olmalısınız: \`Yönetici\`** }]
$onlyIf[$mentionedChannels[1]!=;{title:Yanlış Kullanım}{description:$customEmoji[ptick] | **Doğru Kullanım: \`kf-botengel-aç #log-kanalı\`**}{color:00FF00}]
    `
}