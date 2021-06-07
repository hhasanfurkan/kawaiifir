module.exports = ({
  name:"sunucu-bilgi",
  aliases:['sunucubilgi'],  
  code:`$title[$serverName[$guildID] | Sunucu Bilgileri]
  $description[
    👑 **Sunucu Sahibi**
    <@$ownerID>

    🆔 **Sunucu ID**
    $guildID

    📆 **Oluşturulma Tarihi**
    $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$guildID;time];second;Saniye;-1];seconds;Saniye;-1];minute;Dakika;-1];minutes;Dakika;-1];hour;Saat;-1];hours;Saat;-1];day;Gün;-1];days;Gün;-1];week;Hafta;-1];weeks;Hafta;-1];month;Ay;-1];months;Ay;-1];year;Yıl;-1];years;Yıl;-1];and;ve;-1] Önce Oluşturulmuş
    
   🎯 **Bölge**
   $replaceText[$replaceText[$replaceText[$serverRegion;russia;:flag_ru: Rusya;-1];europe;:flag_eu: Avrupa;-1];india;:flag_in: Hindistan;-1]
   
   📜 **Kanallar [$channelCount]**
   $channelCount[text] yazı | $channelCount[voice] ses | $channelCount[category] kategori
   
   👥 **Kullanıcılar [$membersCount]**
   $membersCount[$guildID;online] çevrimiçi
   $membersCount[$guildID;idle] boşta
   $membersCount[$guildID;dnd] rahatsız etmeyin
   $membersCount[$guildID;offline] çevrimdışı
   $botCount bot
   
   🎉 **Rol sayısı**
   $roleCount]
   $footer[Kawaii Fire Sunucu Bilgi]
   $thumbnail[$serverIcon[$guildID]]
   $color[303136]`
})