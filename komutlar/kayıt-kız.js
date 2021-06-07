module.exports = {
  name: "k",
  aliases: ['kız'],
  code: `
  $suppressErrors[Kayıt edilemedi, kayıt rolleri ve kanalları tam olarak doğru ayarlanmamış olabilir]
  $channelSendMessage[$getServerVar[kayıtyapıldıkanal];{title:Kayıt Yapıldı!}{description:$customEmoji[aright]**•<@$mentioned[1]> aramıza <@&$getServerVar[kız]> rolleri ile katıldı.**
  
  $customEmoji[ztpikachu]**•Kaydı Gerçekleştiren Yetkili:**         
  > <@$authorID>                                                                
  
  $customEmoji[zero_two_kalp]**•Aramıza Hoş Geldin**
  > <@$mentioned[1]>}{color:303136}{$footer[Kawaii Fire Kayıt Sistemi;$userAvatar[$clientID]]}]  

  $title[Kayıt Yapıldı!]
  $description[> **Kayıt Bilgileri**
  
  $customEmoji[areyzz_tik]**•Kayıt Edilen Kullanıcı:** <@$mentioned[1]>
  $customEmoji[aaucgen]**•Kayıt Eden Yetkili:** <@$authorID>
  $customEmoji[aayuklenyorr]**•Verilen Roller:** <@&$getServerVar[erkek]>
  $customEmoji[emoji_90]**•Yeni İsim:** \`$getServerVar[tag] $noMentionMessage[1] $getServerVar[ayraç] $noMentionMessage[2]\`
  $customEmoji[aaamongdans]**•Kayıt Türü:** \`Cinsiyet / Kız\`
  ]
  $color[303136]
  $thumbnail[$userAvatar[$mentioned[1]]]
  $setServerVar[kayıtlıüye;$sum[$getServerVar[kayıtlıüye];1]]
  $setServerVar[kayıtlıkız;$sum[$getServerVar[kayıtlıkız];1]]
  $setUserVar[kayıtsayısı;$sum[$getUserVar[kayıtsayısı];1];$authorID]
  $changeNickName[$mentioned[1];$getServerVar[tag] $noMentionMessage[1] $getServerVar[ayraç] $noMentionMessage[2]]
  $giveRoles[$mentioned[1];$getServerVar[kız]]
  $onlyForChannels[$getServerVar[kayıtkanal];Burası Kayıt Etme Kanalı Değil]
  $onlyIf[$hasRole[$authorID;$getServerVar[kayıtyetkilisi]]!=false;Bu komutu kullanmak için **$roleName[$getServerVar[kayıtyetkilisi]]** rolüne sahip olman gerekiyor]
    $onlyIf[$getServerVar[kayıtsistemi]==açık;Bu komutu kullanmak için kayıt sistemini açmanız gerekiyor. Açmak için **$getServerVar[Prefix]kayıtsistemi aç** yazmalısınız.]
  `
};