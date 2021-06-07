module.exports = ({
  name:"kullanıcı-bilgi",
  aliases:['kullanıcıbilgi'],
  code:`$author[$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
  $thumbnail[$userAvatar[$mentioned[1;yes]]]
  $title[Kullanıcı Bilgileri]
  $description[**Şuanda Oynadığı Oyun**
  $replaceText[$replaceText[$activity[$mentioned[1;yes]];none;Bir oyun oynamıyor];Custom Status, ;;-1]
  **Durum**
  $replaceText[$replaceText[$replaceText[$replaceText[$status[$mentioned[1;yes]];online;Çevrimiçi;-1];idle;Boşta;-1];dnd;Rahatsız Etmeyin;-1];offline;Çevrimdışı;1]
  **Rozetleri**
  $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replace Text[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$mentioned[1;yes]];Early Verified Developer;$customEmoji[BotDeveloper]];House Balance;$customEmoji[Balance]];House Brilliance;$customEmoji[Brilliance]];House Bravery;$customEmoji[Bravery]];Verified Developer;];Discord Partner;$customEmoji[Partner]];Early Supporter;$customEmoji[EarlySupporter]];Verified Bot;$customEmoji[BotCheck]];Nitro Classic;$customEmoji[Nitro]]; ,;];Partnered Server Owner,;];Discord Employee;$customEmoji[DiscordStaff]];Hypesquad Events;$customEmoji[HypeSquad]];Bughunter Level 2;$customEmoji[bughunter2]];Bughunter Level 1;$customEmoji[bughunter1]]
  **Sunucuya Giriş Tarihi**
  $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$memberJoinedDate[$mentioned[1;yes];time];second;Saniye;-1];seconds;Saniye;-1];minute;Dakika;-1];minutes;Dakika;-1];hour;Saat;-1];hours;Saat;-1];day;Gün;-1];days;Gün;-1];week;Hafta;-1];weeks;Hafta;-1];month;Ay;-1];months;Ay;-1];year;Yıl;-1];years;Yıl;-1];and;ve;-1] Önce Katılmış
  **Discord Kayıt Tarihi**
    $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$mentioned[1;yes];time];second;Saniye;-1];seconds;Saniye;-1];minute;Dakika;-1];minutes;Dakika;-1];hour;Saat;-1];hours;Saat;-1];day;Gün;-1];days;Gün;-1];week;Hafta;-1];weeks;Hafta;-1];month;Ay;-1];months;Ay;-1];year;Yıl;-1];years;Yıl;-1];and;ve;-1] Önce Kaydolmuş
    **Kullanıcı ID**
    $mentioned[1;yes]
    **Bot mu?**
    $replaceText[$replaceText[$isBot[$mentioned[1;yes]];true;Evet;-1];false;Hayır;-1]
    **Roller**
    $userRoles[$mentioned[1;yes];mentions; **|** ]]
    $footer[$username[$clientID];$userAvatar[$clientID]]
    $color[RED]`
})