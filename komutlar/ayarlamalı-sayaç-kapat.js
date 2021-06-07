module.exports = {
  name: "sayaçkapat",
  aliases: "sayaç-kapat",  
  code: `
  $onlyPerms[admin;$customEmoji[pcross] | **Sayaç Komutunu Kapatmak için Yetkin Bulunmamakta!**]
  $resetServerVar[sayaçlog]
  $resetServerVar[sayaç]
 $description[$customEmoji[ptick] | **Sayaç için Ayarlanan Rol ve Log Kanalı Temizlendi!**]
  `
}