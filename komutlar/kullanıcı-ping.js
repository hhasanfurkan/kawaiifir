module.exports = {
name:"ping",
code:`
$color[ffccff]
$description[**Aşağıdaki Resimde Şuandaki Mesaj Pingimi Görebilirsin**
$image[https://falsiskremlin.sirv.com/resim_2020-11-28_113400.png?text.0.text=$ping%20ms&text.0.position.x=-10%25&text.0.position.y=-25%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Play&watermark.0.image=%2FImages%2F784413323910709288.png&watermark.0.position.x=-35%25&watermark.0.scale.width=200&watermark.0.scale.height=200]
]
$footer[İsteyen Kullanıcı: $username[$authorID]#$discriminator[$authorID]]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;Bunun İçin Premium Üye Olmalısınız] `
}