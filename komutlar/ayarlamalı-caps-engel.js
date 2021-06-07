module.exports = {
    name: "caps-engel",
    code: `
    $if[$message[1]==aç] 
    $setServerVar[caps;açık]
    $setServerVar[capsyüzde;$message[2]]
    $title[❗️Caps Engel Sistemi Başarı İle Açıldı❗️]
    $description[**✅ | Artık Mesajların Harf Sayısı %$message[2]'den Fazlası Büyük Harf İse Mesaj Silinicek!**]
    $color[00FF00]
    $deleteIn[5s]
    $footer[Ayarlayan Kişi $username[$authorID];$authorAvatar] $addTimestamp
    $onlyIf[$getServerVar[caps]!=açık;{title:❗️ | Sistem Zaten Açık}{color:00FF00}{delete:5s}] 
    $onlyIf[$message[2]<=100;{title:❗️ | Yanlış Kullanım}{description:**✅ | Girilen Değer 100'ün Altında Olmalı!**}{color:00FF00}{delete:5s}]
    $onlyIf[$isNumber[$message[2]]!=false;{title:❗️ | Yanlış Kullanım}{description:**✅ | Girilen Değer Bir Sayı Olmalı!**}{color:00FF00}{delete:5s}]
    $onlyIf[$message[2]!=;{title:❗️ | Yanlış Kullanım}{description:**✅ | Doğru Kullanım: \`kf-caps-engel aç <yüzde>\`**}{color:00FF00}{delete:5s}]  

    $elseIf[$message[1]==kapat]
    $setServerVar[caps;kapalı]
    $setServerVar[capsyüzde;]
    $title[❗️ | Caps Engel Sistemi Başarı İle Kapatıldı]
    $description[**✅ | Artık Herkes İstediği Kadar Büyük Harf Kullanabilir!**]
    $color[00FF00]
    $deleteIn[5s]
    $footer[Ayarlayan Kişi $username[$authorID];$authorAvatar] $addTimestamp
    $onlyIf[$message[1]!=;{title:❗️ | Yanlış Kullanım}{description:**✅ | Doğru Kullanım: \`kf-caps-engel kapat\`**}{color:00FF00}{delete:5s}]  
    $onlyIf[$getServerVar[caps]!=kapalı;{title:❗ | Sistem Zaten Kapalı}{color:00FF00}{delete:5s}]   
    $endelseIf
    $else
    $title[❗️ | Yanlış Kullanım❗]
    $description[**✅ | Lütfen Geçerli Bir Eylem Yazın \`aç - kapat\`**]
    $color[00FF00]
    $endif
    $deleteIn[5s]
    $deletecommand
    $onlyPerms[admin;{title:❗️ | Üzgünüm Yetkin Yok}{description:**Bu Özelliği Kullanmak İçin Şu Yetkiye Sahip Olmalısınız: \`Yönetici\`** }{color:00FF00}{delete:5s}]
    `
}