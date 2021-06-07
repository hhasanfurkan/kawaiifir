module.exports = {
  name:"uyarılar",
  code:`
 $description[
  $thumbnail[$userAvatar[$mentioned[1]]]
  $username[$mentioned[1]]#$discriminator[$mentioned[1]] **Kişinin Toplam Uyarı Sayısı: \`$getUserVar[tuyarı;$mentioned[1]]\`**
  =================
    $getUserVar[uyarı;$mentioned[1]]
  ]
  $footer[Kontrol Eden Yetkili: $username#$discriminator;$authorAvatar]
  $onlyPerms[admin;$customEmoji[pcross] | **Bu Komut için Yetkin Bulunmamakta!**]
  $onlyIf[$message!=;$customEmoji[pcross] | **Lütfen Uyarılarına Bakmam için Birini Etiketle**] 
  `
}

