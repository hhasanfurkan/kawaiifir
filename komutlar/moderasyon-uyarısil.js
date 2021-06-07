module.exports = {
  name:"uyarısil",
  code:`
 $customEmoji[ptick] | <@$mentioned[1]> Kişisinin Uyarısı Temizlendi!
 $setUserVar[tuyarı;0;$mentioned[1]]
 $setUserVar[uyarı;;$mentioned[1]]
$onlyPerms[admin;$customEmoji[pcross] | **Bu Komut için Yetkin Bulunmamakta!**]
$onlyIf[$message!=;$customEmoji[pcross] | **Lütfen Uyarısını Silmem için Birini Etiketle**] 	
  `
}

