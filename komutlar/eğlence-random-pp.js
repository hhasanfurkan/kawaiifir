module.exports = {
name:"randompp",
aliases:"random-pp",
code:`
$title[Random PP]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;$customEmoji[pcross] | **Bu Komutu Kullanabilmek için Premium Üye Olmalısınız**] 
$footer[Bu Kod Furkim Development'a Aittir Çalınması Kesinlikle Yasaktır]
$image[$userAvatar[$randomUserID]]
$color[$random[0;99999]]`
}