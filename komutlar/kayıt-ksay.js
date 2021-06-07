module.exports = ({
  name:"ksay",
  code:`$title[Sunucu Verileri]
  $description[
  **Prefix**
  $getServerVar[Prefix]
  
  **Kayıt Sistemi**
  $replaceText[$replaceText[$getServerVar[kayıtsistemi];kapalı;Sistem Kapalı;-1];açık;Sistem Açık;-1]
  
  **Kayıt Yetkilisi**
  <@&$getServerVar[kayıtyetkilisi]>
  
  **Kayıt Yapıldıktan Sonra Mesajın Gönderildiği Kanal**
  <#$getServerVar[kayıtyapıldıkanal]>
  
  **Kayıt Kanalı**
  <#$getServerVar[kayıtkanal]>
  
  **Tag**
  $getServerVar[tag]
  
  **Ayraç**
  $getServerVar[ayraç]
  
  **Erkek Rolü**
  <@&$getServerVar[erkek]>
  
    **Kız Rolü**
  <@&$getServerVar[kız]>
  
  **Otorol**
  <@&$getServerVar[otorol]>
  
  **Toplam kaydedilmiş üye**
  $getServerVar[kayıtlıüye]
  
  **Toplam kaydedilmiş Erkek**
  $getServerVar[kayıtlıerkek]
  
    **Toplam kaydedilmiş Kız**
  $getServerVar[kayıtlıkız]]
  $color[303136]
  $thumbnail[$userAvatar[$clientID]]`
})