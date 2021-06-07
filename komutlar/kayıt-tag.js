module.exports = {
  name: "tag",
  aliases: ["tag-ayarla", "tagayarla"],
  code: `$setServerVar[tag;$message[1]]
  $argsCheck[>1;Lütfen bir tag belirleyin. Örneğin: *$getServerVar[Prefix]tag ^** ]
  $title[Tag Kaydedildi]
  $description[Tag Başarıyla **$message[1]** olarak kaydedildi.
  
  Tagi Değiştirmek için aynı komutu yeni tag için uygulayın.
  Kaydeden Yetkili : $username[$authorID]
  Tag : $message[1]]
  $footer[$username;$authorAvatar]
  $addTimeStamp
  $color[303136]
  $onlyPerms[admin;Tagi Kaydetmek İçin **Yönetici** Yetkisine Sahip Olmanız Gerekmektedir.]
  $onlyIf[$getServerVar[kayıtsistemi]==açık;Bu komutu kullanmak için kayıt sistemini açmanız gerekiyor. Açmak için **$getServerVar[Prefix]kayıtsistemi aç** yazmalısınız.]
  $deletecommand
  $deleteIn[10s]`
};