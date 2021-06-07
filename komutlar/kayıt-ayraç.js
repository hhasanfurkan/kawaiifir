module.exports = {
  name: "ayraç",
  aliases: ["ayraç-ayarla", "ayraçayarla"],
  code: `$setServerVar[ayraç;$message[1]]
  $argsCheck[>1;Lütfen bir ayraç belirleyin. Örneğin: *$getServerVar[Prefix]ayraç -**. Eğer belirlemezsen ayraç otomatik olarak **|** olarak kaydedilecek.]
  $title[Ayraç Kaydedildi]
  $description[Ayraç Başarıyla **$message[1]** olarak kaydedildi.
  
  Ayracı Değiştirmek için aynı komutu yeni ayraç için uygulayın.
  Kaydeden Yetkili : $username[$authorID]
  Ayraç : $message[1]]
  $footer[$username;$authorAvatar]
  $addTimeStamp
  $color[303136]
  $onlyPerms[admin;Ayracı Kaydetmek İçin **Yönetici** Yetkisine Sahip Olmanız Gerekmektedir.]
  $onlyIf[$getServerVar[kayıtsistemi]==açık;Bu komutu kullanmak için kayıt sistemini açmanız gerekiyor. Açmak için **$getServerVar[Prefix]kayıtsistemi aç** yazmalısınız.]
  $deletecommand
  $deleteIn[10s]`
};