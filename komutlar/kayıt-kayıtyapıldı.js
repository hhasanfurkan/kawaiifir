module.exports = ({
  name:"kayıtyapıldı-kanal",
  aliases:['kayıt-yapıldı-kanal'],
  code:`$setServerVar[kayıtyapıldıkanal;$mentionedChannels[1]]
  $argsCheck[>1;Lütfen bir kanal etiketleyin. Örneğin: *$getServerVar[Prefix]kayıtyapıldı-kanal #sohbet*]
  $title[Kayıt Yapıldı Kanal Ayarlandı]
  $description[Kanal Ayarlandı. Artık Biri Kayıt edilince <#$mentionedChannels[1]> Kanalına; Kullanıcı kayıt edildi diyeceğim.
    
  Kanalı Değiştirmek için aynı komutu yeni kanal için uygulayın.
  Kaydeden Yetkili : $username[$authorID]
  Kaydedilen Kanalın ID'si : $mentionedChannels[1]]
  $footer[$username;$authorAvatar]
  $addTimeStamp
  $color[303136]
  $onlyPerms[admin;Bu Kanalı Kaydetmek İçin **Yönetici** Yetkisine Sahip Olmanız Gerekmektedir.]
  $deletecommand
  $deleteIn[10s]
  $onlyIf[$getServerVar[kayıtsistemi]==açık;Bu komutu kullanmak için kayıt sistemini açmanız gerekiyor. Açmak için **$getServerVar[Prefix]kayıtsistemi aç** yazmalısınız.]`
})