module.exports = ({
name:"kayıtsay",
code:`$title[Yetkilinin Kayıt Sayısı]
$description[Sorgulanan Yetkili : <@$mentioned[1;yes]>

Kişi Şimdiye kadar **$getUserVar[kayıtsayısı;$mentioned[1;yes]]** kadar kişiyi kayıt etmiş.]
$color[303136]
$onlyIf[$hasRole[$mentioned[1;yes];$getServerVar[kayıtyetkilisi]]==true;Sorgulanan Kişi kayıt yetkilisi değil]
$thumbnail[$userAvatar[$mentioned[1;yes]]]`
})