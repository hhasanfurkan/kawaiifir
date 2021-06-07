module.exports = {
  name: "kayıtsistemi-aç",
  aliases: ["kayıt-sistemi aç"],
  code: `$setServerVar[kayıtsistemi;açık]
  $title[Kayıt Sistemi Açıldı]
  $description[Kayıt sistemi başarıyla açıldı. Sistemi kurmak için $getServerVar[Prefix]yardım yazın ve komutlarıma bakın.
  
  
  Kaydeden Yetkili : $username[$authorID]]
  $footer[$username;$authorAvatar]
  $addTimeStamp
  $color[303136]
  $onlyPerms[admin;Bu Sistemi Açmak İçin **Yönetici** Yetkisine Sahip Olmanız Gerekmektedir.]
  $deletecommand
  $deleteIn[10s]
  $onlyIf[$getServerVar[kayıtsistemi]==kapalı;Kayıt Sistemi zaten **açık**]`
};