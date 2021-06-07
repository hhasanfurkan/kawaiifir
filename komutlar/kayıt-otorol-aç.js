module.exports = ({
    name:"kotorol-aç",
    code:`
$argsCheck[>1;$customEmoji[yanlis] Hata, Lütfen Bir Rol Etiketleyin]
$setServerVar[otorol;$mentionedRoles[1]]
$customEmoji[yes] Başarılı, Otorol $roleName[$mentionedRoles[1]] olarak ayarlandı.
$suppressErrors[$customEmoji[yanlis] Hata, Lütfen tekrar deneyin]
$onlyPerms[admin;$customEmoji[yanlis] Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olman gerekiyor.]
    $onlyIf[$getServerVar[kayıtsistemi]==açık;Bu komutu kullanmak için kayıt sistemini açmanız gerekiyor. Açmak için **$getServerVar[Prefix]kayıtsistemi aç** yazmalısınız.]`
})