module.exports = ({
name:"$alwaysExecute",
code:`$description[**Etiketlediğiniz Kişi Şuanda \`$getGlobalUserVar[afks;$mentioned[1]]\` Sebebinden Afk'dır**]
$onlyIf[$getGlobalUserVar[afk;$mentioned[1]]==evet;]
$suppressErrors`
})