module.exports = {
name:"among",
code:`
$title[👨‍🚀Among Us👨‍🚀]
$description[Acil bir toplantı yaptın çünkü $randomText[Oyuncu 3] $randomText[görevini yapmadı;birini öldürdü;sabotaj yaptı].
👤 $username:  $randomText[Oyuncu 3] $randomText[görevini yapmadı;birini öldürdü;sabotaj yaptı]
👤 Oyuncu 3                      
Hayır $randomText[$username Ben değilim gerçeği söylüyorum!; Bana suç atıyosun ama belkide sensin]
👤 Oyuncu 1                       
$randomText[Banada $username gibi geliyor!; Banada Oyuncu 3 gibi Geliyor] 
👤 Oyuncu 2                       
$randomText[Bence oy vermeliyiz artık!; Bence skip geçelim]       
--------------------------------
Birkaç saniye sonra...

👤 $username Oy: $randomText[ඞ;ඞඞඞ;ඞඞ]    👤 Oyuncu 1 Oy:$randomText[ඞඞ;ඞ;ඞඞඞ]    👤 Oyuncu 2 Oy:$randomText[ඞඞ;ඞ;ඞඞඞ]     👤 Oyuncu 3 Oy:$randomText[ඞඞ;ඞ;ඞඞඞ]
Skipped Voting: ඞ
Zorlu bir tartışmanın ardından oy çoğunluluğu ile Mürettabattan biri atıldı
'  .    '  .      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
 　.　　      。　        ඞ   。　    .    •
 •             $randomText[Oyuncu 1;Oyuncu 2;Oyuncu 3;$username] $randomText[Was the;Was not the] impostor.　 。　.
　 　　。　　　　　　ﾟ　　　.　　　　　.
,　　　　.　 .　　       .               。 
Oof.]
$onlyIf[$jsonRequest[https://tandembot.xyz/api/$clientID/voted/$authorid;hasvote]==true;{description:**Bu Komutu Kullanabilmek için Bota [BURADAN](https://tandembot.xyz/bot/$clientID/vote) Oy Vermeniz Gerekiyor. Oylar Her \`12\` Saatte Bir Sıfırlanır!**}{color:RED}]`
}