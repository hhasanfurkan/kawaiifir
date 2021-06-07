module.exports = ({
name:"$alwaysExecute",
code:`$setGlobalUserVar[afk;hayır]
$setGlobalUserVar[afks;]
$description[**\`$userTag[$authorID]\` Geri Geldi! Artık AFK Değil, Hoşgeldin**]
$onlyIf[$getGlobalUserVar[afkc]==2;]
$setGlobalUserVar[afkc;$sum[$getGlobalUserVar[afkc];1]]
$onlyIf[$getGlobalUserVar[afk;$authorid]==evet;]
$suppressErrors`
})