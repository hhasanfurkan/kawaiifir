module.exports = ({
name:"afk",
code:`$setGlobalUserVar[afk;evet]
$setGlobalUserVar[afkc;0]
$setGlobalUserVar[afks;$message]
$description[**Artık Biri Seni Etiketleyince \`$message\` Sebebinden AFK Diyeceğim!**]
$color[BLUE]
$onlyIf[$message!=;Lütfen bir afk sebebi belirleyin]`
})