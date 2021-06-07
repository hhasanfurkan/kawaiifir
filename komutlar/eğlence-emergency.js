module.exports = {
name:"emergency",
aliases:"meeting",
code:`
$argsCheck[>1;**Doğru Kullanım: \`kf-emergency Yazınız\`**]
$image[https://vacefron.nl/api/emergencymeeting?text=$replaceText[$message; ;+]]`
}