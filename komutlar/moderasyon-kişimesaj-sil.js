module.exports = {
name:"kişi-mesaj-sil",
aliases:['kişimesaj-sil'],
code:`
$deletecommand
$deleteIn[5s]
$onlyPerms[managemessages;$customEmoji[pcross] | **Komut'u Kullanmak için \`Mesajları\` Yönet Yetkisine Sahip Olmalısın!**]
$argsCheck[>2;$customEmoji[pcross] | **Doğru Kullanım: \`kf-kişi-mesaj-sil @kişi miktar\`**]
$clear[$message[2];$mentioned[1]]
$description[$customEmoji[ptcik] | **<@$mentioned[1]> Kişisinin \`$message[2]\` Miktar Mesajı Uzaya Fırlatıldı**]`
}