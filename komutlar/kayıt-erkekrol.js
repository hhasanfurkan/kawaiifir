module.exports = {
  name: "erkekrol",
  aliases: ['erkek-rol'],
  code: `$setServerVar[erkek;$mentionedRoles[1]]
  $argsCheck[>1;Lütfen bir rol belirleyin. Örneğin: *$getServerVar[Prefix]erkekrol @rol** ]
  $title[Rol Kaydedildi]
  $description[Erkek Rolü Başarıyla **$mentionedRoles[1]** olarak kaydedildi.
  
  Rolü Değiştirmek için aynı komutu yeni rol için uygulayın.
  Kaydeden Yetkili : $username[$authorID]
  Rol : <@&$mentionedRoles[1]>]
  $footer[$username;$authorAvatar]
  $addTimeStamp
  $color[303136]
  $onlyPerms[admin;Rolü Kaydetmek İçin **Yönetici** Yetkisine Sahip Olmanız Gerekmektedir.]
  $onlyIf[$getServerVar[kayıtsistemi]==açık;Bu komutu kullanmak için kayıt sistemini açmanız gerekiyor. Açmak için **$getServerVar[Prefix]kayıtsistemi aç** yazmalısınız.]
  $deletecommand
  $deleteIn[10s]`
};