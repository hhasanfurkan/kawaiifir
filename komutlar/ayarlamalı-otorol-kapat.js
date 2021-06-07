module.exports = {
  name: "otorolkapat",
  aliases: "otorol-kapat",
  code: `
  $onlyPerms[admin;**$customEmoji[pcross] | Otorol Kapatma Komutu için Yetkin Bulunmamakta**]
  $resetServerVar[otoroll]
  $resetServerVar[otorollog]
  $description[**$customEmoji[ptick] | Otorol için Ayarlanan Rol ve Log Kanalı Temizlendi!**]
   `
}