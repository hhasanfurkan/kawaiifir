module.exports = {
    name: "link-engel-kapat",
    alises:['linkengelkapat','linkengel-kapat'],
    code: `
    $setServerVar[linkengel;no]
    $title[Link Engel Kapatıldı]
    $description[**\`Artık Bu Sunucuda Herkes Link Atabilecek\`**]
    $color[random]
    $onlyPerms[managemessages;**❎ | Kanalları Yönet Yetkin Yok!**]
    $onlyIf[$getServerVar[linkengel]!=no;**Bu Özellik Zaten Kapalı Durumda**]   
    `
}