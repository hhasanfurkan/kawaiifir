module.exports = {
name:"trump",
aliases:"donald",
code:`
$argsCheck[>1;**Doğru Kullanım: \`kf-trump Yazınız\`**]
$image[https://api.no-api-key.com/api/v2/trump?message=$replaceText[$message;%20;+;-1]]`
}