module.exports = ({
    name:"function",
    code:`
$title[$message;https://dbd.leref.ga/functions/usd$toLowercase[$replaceText[$get[msg];$;;-1]]]

$let[msg;$filterMessage[$message;$]]
$description[\`\`\`html
$jsonRequest[https://dbdjs.leref.ga/functions/$message;description]
\`\`\`
\`\`\`kt
$jsonRequest[https://dbdjs.leref.ga/functions/$message;usage]
\`\`\`
[Kılavuz](https://dbdjs.leref.ga)]

$thumbnail[https://cdn.discordapp.com/attachments/825539441539678208/829233986010087434/981f79673563f7268f4e6a88f1091787.webp]
$color[0066FF]
$onlyIf[$jsonRequest[https://dbdjs.leref.ga/functions/$message;name]!=;Fonksiyon bulunamadı]`
})
