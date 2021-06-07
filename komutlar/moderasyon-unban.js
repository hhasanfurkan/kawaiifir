module.exports = {
       name:"unban",
       code:`
$unban[$message[1]]
**$username[$message[1]]#$discriminator[$message[1]] Kişisinin Banı Açılmıştır!**
$onlyIf[$hasPerms[$authorID;ban]!=false;**Unban Komutunu Kullanmak için Yetkin Yok**]
$onlyIf[$isNumber[$message[1]]!=false;**Unban için Girilen Bir ID Değil!**]
$onlyIf[$message!=;**Lütfen Banı Açılacak Kişinin ID'sini Giriniz**]`
}