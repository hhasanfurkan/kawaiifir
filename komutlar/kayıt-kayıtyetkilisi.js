module.exports = {
  name: "kayıtyetkilisi",
  aliases: ["kayıt-yetkilisi"],
  code: `$setServerVar[kayıtyetkilisi;$mentionedRoles[1]]
  $argsCheck[>1;Lütfen bir rol etiketleyin. Örneğin: *$getServerVar[Prefix]kayıtyetkili @kayıt yetkilisi*]
  $title[Rol Kaydedildi]
  $description[Kayıt Yetkilisi Rolü Başarıyla **$roleName[$mentionedRoles[1]]** olarak kaydedildi.
  
  Rolü Değiştirmek için aynı komutu yeni rol için uygulayın.
  Kaydeden Yetkili : $username[$authorID]
  Kaydedilen Rol ID'si : $mentionedRoles[1]]
  $footer[$username;$authorAvatar]
  $addTimeStamp
  $color[303136]
  $onlyPerms[admin;Bu Rolü Kaydetmek İçin **Yönetici** Yetkisine Sahip Olmanız Gerekmektedir.]
  $onlyIf[$getServerVar[kayıtsistemi]==açık;Bu komutu kullanmak için kayıt sistemini açmanız gerekiyor. Açmak için **$getServerVar[Prefix]kayıtsistemi aç** yazmalısınız.]
  $deletecommand
  $deleteIn[10s]`
};