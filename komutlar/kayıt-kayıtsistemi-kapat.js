module.exports = {
  name: "kayıtsistemi-kapat",
  aliases: ["kayıt-sistemi kapat"],
  code: `$setServerVar[kayıtsistemi;kapalı]
  $title[Kayıt Sistemi Kapatıldı]
  $description[Kayıt sistemi başarıyla kapatıldı. Sistemi kurmak için $getServerVar[Prefix]yardım yazın ve komutlarıma bakın.
  
  Kaydeden Yetkili : $username[$authorID]]
  $footer[$username;$authorAvatar]
  $addTimeStamp
  $color[303136]
  $onlyPerms[admin;Bu Sistemi Kapatmk İçin **Yönetici** Yetkisine Sahip Olmanız Gerekmektedir.]
  $deletecommand
  $deleteIn[10s]
  $onlyIf[$getServerVar[kayıtsistemi]==açık;Kayıt Sistemi zaten **kapalı**]`
};