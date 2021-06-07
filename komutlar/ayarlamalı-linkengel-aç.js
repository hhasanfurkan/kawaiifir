module.exports = {
    name: "link-engel-aç",
    alises:['linkengelaç','linkengel-aç'],
    code: `
    $setServerVar[linkengel;yes]
    $title[Link Engel Sistemi Açıldı]
    $description[**\`Artık Bu Sunucuda Kimse Link Paylaşamayacak**\`]
    $color[random]
    $onlyPerms[managemessages;**❎ | Kanalları Yönet Yetkin Yok!**]
    $onlyIf[$getServerVar[linkengel]!=yes;**Bu Özellik Zaten Aktif Durumda!**]   
    `
}