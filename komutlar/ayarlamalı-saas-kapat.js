module.exports = {
    name: "saas-kapat",
    aliases:['sa-as-kapat'],
    code: `
    $setServerVar[saas;no]
    $title[Sa-As Sistemi Başarıyla Kapatıldı]
    $description[$customEmoji[ptick] | **Artık Selam Veren Kimseye Cevap Vermeyeceğim**]
    $color[FF00FF]
    $footer[| $username Tarafından Kullanıldı.;$userAvatar[$authorID]]
    $onlyPerms[managechannels;**$customEmoji[pcross] | <@$authorID> Kanalları Yönet Yetkin Bulunmamakta!**]
    $onlyIf[$getServerVar[saas]!=no;**$customEmoji[pcross]  | <@$authorID> Sa-As Sistemi Zaten Kapalı Durumda!**]   
    `
}
 