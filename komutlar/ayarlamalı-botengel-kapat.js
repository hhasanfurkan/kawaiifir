module.exports = {
    name: "botengel-kapat",
    code: `
    $setServerVar[botengel;kapalı]
    $resetServerVar[botengellog]
    $title[Bot Engel Sistemi Başarı İle Kapatıldı]
    $description[$customEmoji[ptick] | **Artık Sunucuya Bot Girebilicek**]
    $color[00FF00]
    $footer[Ayarlayan Kişi $username[$authorID];$authorAvatar] $addTimestamp
    $onlyIf[$getServerVar[botengel]!=kapalı;{title:Sistem Zaten Kapalı}{color:00FF00}] 
    $onlyPerms[admin;{title:Üzgünüm Yetkin Yok}{description:$customEmoji[pcross] | **Bu Özelliği Kullanmak İçin Şu Yetkiye Sahip Olmalısınız: \`Yönetici\`** }]
    $onlyIf[$mentionedChannels[1]!=;{title:Yanlış Kullanım}{description:$customEmoji[ptick] | **Doğru Kullanım: \`kf-botengel-kapat\`**}{color:00FF00}]
    `
}