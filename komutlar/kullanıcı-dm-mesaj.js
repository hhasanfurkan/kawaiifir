module.exports = {
name:"dm-mesaj",
code:`
$argsCheck[>1;**Lütfen Birini Etiketle**]
$argsCheck[>2;**Lütfen Bir Mesaj Yaz**]
$suppressErrors[**Kişinin DM'si Kapalıydı O Yüzden Mesaj Atamadım!**]
$deletecommand
$channelSendMessage[$channelID;**Mesaj Başarıyla Gönderildi!**]
$dm[$mentioned[1]]
$description[**Merhaba Ben furki'nin Botu Kawaii Fire,**
**Aşağıda Bilgilirini Verdiğim Kişi Sana Benim Tarafımdan Mesaj Gönderdi.**

**Mesaj:** $noMentionMessage
**Gönderen Kişi:** <@$authorID>
**Alıcı:**  <@$mentioned[1]>]`
}