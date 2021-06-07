module.exports = {
  name:"kick",
  code:`
  $kick[$mentioned[1];$replaceText[**$noMentionMessage**;****;**\`Sebep Belirtilmedi!\`**;-1]]
  **Atılan Kişi:** \`$userTag[$mentioned[1]]\`
  **Atılma Sebebi:** $replaceText[**$noMentionMessage**;****;**\`Sebep Belirtilmedi!\`**;-1]
  
  $onlyPerms[kick;Sunucudan Atmak için Yetkin Yok!]
  $onlyIf[$message!=;**Birini Etiketlemelisin!**]
$onlyIf[$mentioned[1]!=;**Lütfen Birini Etiketle!**]
  `
}