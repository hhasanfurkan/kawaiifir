module.exports = {
  name:"uyar",
  code:`
  $customEmoji[ptick] | **<@$mentioned[1]> Kisisi $replaceText[*$noMentionMessage*;**;Sebep Belirtilmedi;-1] Sebebi İle Uyarıldı.**
  **Toplam Uyarısı Sayısı: \`$sum[$getUserVar[tuyarı;$mentioned[1]];1]\`**
  $setUserVar[tuyarı;$sum[$getUserVar[tuyarı;$mentioned[1]];1];$mentioned[1]]
  $setUserVar[uyarı;
  $getUserVar[uyarı;$mentioned[1]]
  $description[**Uyarılan Kişi:** $username[$mentioned[1]]#$discriminator[$mentioned[1]]
  **Uyarılma Sebebi:** $replaceText[*$noMentionMessage*;**;Sebep Belirtilmedi;-1]
  **Uyaran yetkili:** $username#$discriminator;$mentioned[1]]]
  $onlyPerms[admin;$customEmoji[pcross] | **Bu Komut için Yetkin Bulunmamakta!**]
  $onlyIf[$message!=;$customEmoji[pcross] | **Lütfen Uyarmam için Birini Etiketle**]
  `
}