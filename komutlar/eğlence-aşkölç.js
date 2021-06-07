module.exports = {
name:"aşk-ölç",
aliases:['aşkölç'],
code:`
$color[#ff2025]
$description[ 
$username onu ne kadar seviyor <@$mentioned[1]> $randomText[%10 ❤️ Ne sen onu seviyorsun nede o seni seviyor!;%20 ❤️❤️ Bundan olmaz sal bunu sen!;%30 ❤️❤️❤️ Eeh yaanii idare eder.;%40 ❤️❤️❤️❤️ Arkadaş olabilirsiniz!;%50 ❤️❤️❤️❤️❤️ Kardeş gibisiniz!;%60 ❤️❤️❤️❤️❤️❤️ Olur gibi ne dersin?;%70 ❤️❤️❤️❤️❤️❤️❤️ Onu çok seviyorsun!;%80 ❤️❤️❤️❤️❤️❤️❤️❤️ Havada aşk kokusu var :);%90 ❤️❤️❤️❤️❤️❤️❤️❤️❤️ Çok iyi bi ikilisiniz!;%100 ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ Büyük bir aşk bu, düğün ne zaman?]
$onlyIf[$mentioned[1]!=;$customEmoji[pcross] | **Aşkını Ölçmek için Birini Etiketle**]
$onlyIf[$jsonRequest[https://tandembot.xyz/api/$clientID/voted/$authorid;hasvote]==true;{description:**Bu Komutu Kullanabilmek için Bota [BURADAN](https://tandembot.xyz/bot/$clientID/vote) Oy Vermeniz Gerekiyor. Oylar Her \`12\` Saatte Bir Sıfırlanır!**}{color:RED}]`
}