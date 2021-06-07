module.exports = {
name:"ben",
code:`
$author[$username[$message[1]];$userAvatar[$message[1]]]
$thumbnail[$userAvatar[$message[1]]]
$description[

・__***$userTag[$message[1]] Kişisi banlandı!***__

・***Yasaklanma Sebebi;***
$message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10] $message[11] $message[12] $message[13] $message[14] $message[15]

・***Yasaklayan Yetkili;***
*$usertag[$authorID] / $creationDate[$authorID]*

・***Yasaklandığı Tarih;***
*$hour:$minute $day/$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak;-1];February;Şubat;-1];March;Mart;-1];April;Nisan;-1];May;Mayıs;-1];June;Haziran;-1];July;Temmuz;-1];August;Ağustos;-1];September;Eylül;-1];October;Ekim;-1];November;Kasım;-1];December;Aralık;-1]/$year*

]
$ban[$message[1];$message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] $message[9] $message[10] $message[11] $message[12] $message[13] $message[14] $message[15]

Yasaklandığı Tarih
$day $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;Ocak;-1];February;Şubat;-1];March;Mart;-1];April;Nisan;-1];May;Mayıs;-1];June;Haziran;-1];July;Temmuz;-1];August;Ağustos;-1];September;Eylül;-1];October;Ekim;-1];November;Kasım;-1];December;Aralık;-1] $year

Yasaklayan Yetkili
$usertag[$authorid]
$color[ffccff]
$onlyIf[$isNumber[$message[1]]==true;Falsis Tam Bir ORRRÇUN MARKET ÇALIŞANı]
$argsCheck[<15;Hey en fazla 15 kelimelik bir açıklama yapılabilir!]
$onlyPerms[admin;:retgif: Sadece admin forceban atabilir!]`
}