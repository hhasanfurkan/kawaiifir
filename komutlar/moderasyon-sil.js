module.exports = {
name:"sil",
code:`
$deletecommand
$deleteIn[5s]
$clear[$message[1]]
$argsCheck[>1;$customEmoji[pcross] | **Lütfe Bir Miktar Giriniz**]
$onlyIf[$message[1]>=0;$customEmoji[pcross] | **Lütfen Bir Rakam Giriniz**]
$description[$customEmoji[ptick] | **\`$message[1]\` Miktarda Mesajı Uzaya Fırlattım**]
$onlyPerms[managemessages;$customEmoji[pcross] | **Mesajları Silmek için Mesajları Yönet Yetkin Olmalı**]`
}