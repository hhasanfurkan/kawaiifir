module.exports = {
    name: "küfür-engel",
    alises:['küfürengel'],
    code: `
    $if[$message[1]==aç] 
    $setServerVar[küfür;açık]
    $title[Küfür Engel Sistemi Başarı İle Açıldı]
    $description[**$customEmoji[ptick] | Artık Birisi Küfür Ederse Mesajı Silinicek!**]
    $color[00FF00]
    $deleteIn[5s]
    $footer[Ayarlayan Kişi $username[$authorID];$authorAvatar] $addTimestamp
    $onlyIf[$getServerVar[küfür]!=açık;{title:Sistem Zaten Açık}{color:00FF00}{delete:5s}]   
    $elseIf[$message[1]==kapat]
    $setServerVar[küfür;kapalı]
    $title[Küfür Engel Sistemi Başarı İle Kapatıldı]
    $description[**$customEmoji[ptick] | Artık Birisi Küfür Ederse Mesajı Silinmiyicek**]
    $color[00FF00]
    $deleteIn[5s]
    $footer[Ayarlayan Kişi $username[$authorID];$authorAvatar] $addTimestamp
    $onlyIf[$getServerVar[küfür]!=kapalı;{title:Sistem Zaten Kapalı}{color:00FF00}{delete:5s}]   
    $endelseIf
    $else
    $title[Yanlış Kullanım]
    $description[**$customEmoji[ptick] | Lütfen Geçerli Bir Eylem Yazın \`aç - kapat\`**]
    $color[00FF00]
    $deleteIn[5s]
    $endif
    $deleteIn[5s]
    $deletecommand
    $onlyPerms[admin;{title:Üzgünüm Yetkin Yok}{description:**$customEmoji[pcross] | Bu Özelliği Kullanmak İçin Şu Yetkiye Sahip Olmalısınız: \`Yönetici\`**}{color:00FF00}{delete:5s}]
    `
}