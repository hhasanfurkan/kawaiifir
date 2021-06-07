module.exports = {
name:"emoji",
alises:['emoji-ekle','emoji-yükle'],
code:`
$onlyAdmin[**<@$authorID> Bu İşlme için Yetkiniz Bulunmamaktadır!**]
$argsCheck[2;**<@$authorID> Doğru Kullanım: \`kf-emoji (emojiismi) (emojiurl)\`**]
$addEmoji[$message[1];$message[2];no]
$title[Emoji Ekleme İşlemi Başarıyla Gerçekleştirildi]
$description[**Emoji İsmi:** \`$message[1]\`
**Emoji URL:** \`$message[2]\`
**Emoji:** :$message[1]:]
$image[$message[2]]
$color[ff0000]`
}