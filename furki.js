var furki = require(`dbd.js`)
var fs = require('fs') 
var bot = new furki.Bot({
  token: "", //buraya token yazmayın .env de TOKEN yazan kısmın altı boş olmakta onun altına bot token yazmanız yeterlidir
  prefix: ["$getServerVar[Prefix]","kf!","kf?","kf*","kf/","kf&","kf#"], // satır 24 kısmındaki tm! prefixdir onu değiştirtmeniz yeterlidir 
  mobile: true,//burayı false yaparsanız botunuz telefonda olarak gözükmez böyle durursa telefonda gözükür (hawli durur)
  fetchInvites: true//buraya ellemeyin
})

bot.onMessage()
bot.onJoined()
bot.onLeave()
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    code: command.code,
    aliases: command.aliases,
    nonPrefixed: command.nonPrefixed
  })} 
//variable
bot.variables({
  Prefix:"kf-",  
  prefix:"kf-",
  otocevap:"",
  otocevapw:"",      
  snipe:"",
  snipeu:"",
  snipec:"",
  param:"0",
  balık:"0",
  hamburger:"0",
  pizza:"0",
  kahvaltı:"0",
  pirzola:"0",
  soda:"0",
  radyo:"0",
  bulaşık:"0",
  çamaşır:"0",
  fırın:"0",
  araba:"0",
  ev:"0",
  samsung:"0",
  iphone:"0",
  ipad:"0",
  hata:"0",
  evet:"",
  hayır:"",
  evt:"",
  hyr:"",  
  afks:"",
  afk:"hayır",
  şarkı:"",
  furki:"",
  engel:"no",
  afks:"",
  afk:"hayır",
  furkimm:"0",
  afkc:"",
  linkengel:"no",
  caps:"kapalı",
  capsyüzde:"",
  küfür: "kapalı",
  botengel: "kapalı",
  botengellog: "",
  otorollog: "",  
  sayaç: "0",
  sayaçlog: "",
  kayıtsistemi: "kapalı",
  kayıtyetkilisi: "",
  kayıtyapıldıkanal: "",
  tag: "",
  ayraç: "|",
  kayıtkanal: "",
  erkek: "",
  kız: "",
  kayıtlıüye: "0",
  kayıtlıerkek: "0",
  kayıtlıkız: "0",
  otorol: "",
  kayıtsayısı: "0",
  saas: "no",
  otoroll: "",
  premium:"no",
  presayı:"0",
  kawaii:" ",
  elmas:" ",
  altın:" ",
  demir:" ",
  tuyarı:"0",
  uyarı:""
})
//status
bot.status({
  text: "Furkim Development",
  type: "PLAYING",
  status: "idle",
  time: 12
})
bot.status({
  text: "kf-yardım | kf-istatistik",
  type: "PLAYING",
  status: "idle",
  time: 12
})
bot.status({
  text: "$serverCount Sunucuda $allMembersCount Kisiye $commandsCount Komutla Hizmet Veriyorum",
  type: "PLAYING",
  status: "idle",
  time: 12
})
//saas
bot.command({
  name: "sa",
  code: `
 **Aleyküm Selam, Hoşgeldin <@$authorID> **
$onlyIf[$getServerVar[saas]!=no; ]
$onlyIf[$message==;]
`,
  nonPrefixed: true
})
bot.command({
  name: "sea",
  code: `
 **Aleyküm Selam, Hoşgeldin <@$authorID> **
$onlyIf[$getServerVar[saas]!=no; ]
$onlyIf[$message==;]
`,
  nonPrefixed: true
})
bot.command({
  name: "selam",
  code: `
 **Aleyküm Selam, Hoşgeldin <@$authorID> **
$onlyIf[$getServerVar[saas]!=no; ]
$onlyIf[$message==;]
`,
  nonPrefixed: true
})
//etiket engel
bot.command ({
name:"<@655981789407346718>",
code:`
<@$authorID>
$description[**Sahibim Şuanda __$getVar[furki]__ Sebebinden Etiket İstemiyor Etiket Atmayı Bırak!**]
$footer[youtube : furki]
$deletecommand
$deleteIn[10s]
$onlyIf[$getVar[engel]!=yes;]`,
    nonPrefixed: true
})
bot.command ({
name:"<@!655981789407346718>",
code:`
<@$authorID>
$description[**Sahibim Şuanda __$getVar[furki]__ Sebebinden Etiket İstemiyor Etiket Atmayı Bırak!**]
$footer[youtube : furki]
$deletecommand
$deleteIn[10s]
$onlyIf[$getVar[engel]!=yes;]`,
    nonPrefixed: true
})
bot.command({
  name:"dbd-aoi",
  code:`$forEachGuildChannel[aoi]
  $onlyForIDs[655981789407346718;sen kullanamazsın]`
})
bot.awaitedCommand({
  name:"aoi",
  code:`$editChannel[$channelID;$default;$replaceText[$channelName[$channelID];dbdjs;aoijs;-1];$default;no;$default;$default;no]
  $suppressErrors`
})
//prefix
bot.command ({
name: "prefix",
code:`
$setServerVar[Prefix;$message[1]]
$title[Prefix Değiştirme Başarılı]
$description[$customEmoji[tik] **Prefixiz Başarıyla \`$message[1]\` Olarak Değiştirildi.
Örnek Komut Kullanım:
\`\`\`$message[1]yardım
$message[1]prefix
$message[1][Komut Adı]\`\`\`**]
$onlyPerms[admin;**Komutu Kullanmak için Yetkin Yok!**]
$suppressErrors[**Bir Hata Oluştu!**]
$onlyIf[$message[1]!=$getServerVar[Prefix];**Prefix'in Zaten Bu Lütfen Farklı Bir Prefix Dene**]
$onlyIf[$message[1]!=;**Bir Prefix Yazmalısın**]
$argsCheck[<1;**Bir Prefix Girmelisin**]`
})
//otocevap
bot.command({
   name:"otocevap",
    code:`
$if[$message[1]==aç]
$channelsendMessage[$channelid;**Başarıyla \`\`$splitText[1]\`\` Otocevap Komudu Olarak Ayarlandı!** **Artık Herhangi Bir Kullanıcı \`\`$splittext[1]\`\` Yazınca \`\`$splittext[2]\`\` Olarak Karşılık Vereceğim!**;no]
$textSplit[$messageSlice[1];|]
$setservervar[otocevap;$getobjectproperty[kurulum] |$splitText[1]|$splitText[2]|]
$addObjectProperty[kurulum;$getServerVar[otocevap]]
$createObject[{}]
$textSplit[$messageSlice[1];|]
$setservervar[otocevapw;0]
$onlyIf[$charCount[$messageSlice[1]]<201;❌ **Otocevap komut/cevap Karakter Limiti En Fazla \`200\` Olabilir.**]
$onlyIf[$checkContains[$toLowercase[$message;|]]==true;❌ **Doğru Kullanım ->** \`\`kfotocevap aç/kapat komut|komut kullanıldığında verilecek cevap\`\`]
$onlyIf[$charCount[$getservervar[otocevap]]<750;❌ Otocevap sınırını doldurmuşsun.]
$elseIf[$message[1]==kapat]
$channelsendMessage[$channelid;\`\`$messageSlice[1]\`\` **Otocevabı Başarıyla Kaldırıldı!**;no]
$setservervar[otocevapw;0]
$setServerVar[otocevap;$replaceText[$getservervar[otocevap];$getobjectproperty[alım];;-1]]
$addObjectProperty[alım;|$splitText[$sum[$findTextSplitIndex[$messageSlice[1]];0]]|$splitText[$sum[$findTextSplitIndex[$messageSlice[1]];1]]|]
$createObject[{}]
$onlyIf[$checkContains[$joinSplitText[];$messageSlice[1]]==true;❌ \`\`$messageslice[1]\`\` **Adlı Bir Otocevap Komudu Bulamadım.**]
$textSplit[$getservervar[otocevap];|]
$setservervar[otocevapw;1]
$endelseIf
$endif
$setservervar[otocevapw;1]
$onlyIf[$checkContains[$message[1];aç;kapat]==true;❌ Kullanılabilir ayarlar \`\`aç\`\` ve \`\`kapat\`\`tır.]
$onlyPerms[manageserver;❌ Bu komudu kullanabilmek için **Sunuyu Yönet** yetkisine sahip olmalısın.]`
})
//otocevap sıralama
bot.command({
    name:"$alwaysExecute",
    code:`
$splitText[$sum[$findTextSplitIndex[$message];1]]
$onlyIf[$findTextSplitIndex[$message]!=0;]
$textSplit[$getservervar[otocevap];|]
$onlyIf[$getservervar[otocevap]!=;]
$onlyIf[$getservervar[otocevapw]!=1;]
`,
    nonPrefixed: true
})
bot.command({
name:"otocevap-listesi",
alises:['otocevaplar','otocevaplistesi','otocevaplist','otocevap listesi'],
code:`$description[
**Otocevap Listesi**
**—————————————————————————————**
$joinSplitText[
]
**—————————————————————————————**]
$color[303136]
$footer[$serverName Otocevap Listesi;$serverIcon[$guildID]]
$thumbnail[$serverIcon[$guildID]]
$author[$username;$authorAvatar]
$textSplit[$getservervar[otocevap];|]`
})
//emojili ban
bot.command({
  name:"eban",
  code:`$reactionCollector[$splitText[1];$authorID;1m;✔️,❌;evet,hayır;yes]
  $textSplit[$sendMessage[{description:
  **\`$username[$mentioned[1;yes]]\` Kişisini Banlamayı Onaylıyormusunuz?**}
  {footer:Evet İçin ✔️ Emojisine Hayır İçin ❌ Emojisine Tıklayınız.};yes]]
  $onlyIf[$hasPerms[$authorID;ban]!=false;**Ban Yetkisine Sahip Değilsiniz!**]
  $onlyIf[$message!=;**Lütfen Birini Etiketle**]
  `
})
bot.awaitedCommand({
  name:"evet",
  code:`
  $clearReactions[$channelID;$message[1];✔️]
  $clearReactions[$channelID;$message[1];❌]
  $editMessage[$message[1];
  {description:**Kişi Sunucudan Yasaklanmıştır**} $ban[$mentioned[1]]]
  $onlyIf[$hasPerms[$authorID;ban]!=false;**Ban Yetkisine Sahip Değilsiniz!**]
  `
})
bot.awaitedCommand({
  name:"hayır",
  code:`
  $clearReactions[$channelID;$message[1];✔️]
  $clearReactions[$channelID;$message[1];❌]
  $editMessage[$message[1];
  {description:**İşlem İptal Edilmiştir**}]
  $onlyIf[$hasPerms[$authorID;ban]!=false;**Ban Yetkisine Sahip Değilsiniz!**]
  `
})
//emojili kick
bot.command({
  name:"ekick",
  code:`$reactionCollector[$splitText[1];$authorID;1m;✔️,❌;evt,hyr;yes]
  $textSplit[$sendMessage[{description:
  **\`$username[$mentioned[1;yes]]\` Kişisini Kicklemeyi Onaylıyormusunuz?**}
  {footer:Evet İçin ✔️ Emojisine Hayır İçin ❌ Emojisine Tıklayınız.};yes]]
  $onlyIf[$hasPerms[$authorID;kick]!=false;**Kick Yetkisine Sahip Değilsiniz!**]
  $onlyIf[$message!=;**Lütfen Birini Etiketle**]
  `
})
bot.awaitedCommand({
  name:"evt",
  code:`
  $clearReactions[$channelID;$message[1];✔️]
  $clearReactions[$channelID;$message[1];❌]
  $editMessage[$message[1];
  {description:**Kişi Sunucudan Kicklenmiştir**} $kick[$mentioned[1]]]
  $onlyIf[$hasPerms[$authorID;kick]!=false;**Kick Yetkisine Sahip Değilsiniz!**]
  `
})
bot.awaitedCommand({
  name:"hyr",
  code:`
  $clearReactions[$channelID;$message[1];✔️]
  $clearReactions[$channelID;$message[1];❌]
  $editMessage[$message[1];
  {description:**İşlem İptal Edilmiştir**}]
  $onlyIf[$hasPerms[$authorID;kick]!=false;**Kick Yetkisine Sahip Değilsiniz!**]
  `
})
//etiket cevap
bot.command({
  name:"<@821832324584308816>",
  code:`$title[Merhaba, Sanırım Kawaii Fire'yi Etiketledin]
$description[> **Botun Bu Sunucudaki Prefixi: \`$getServerVar[Prefix]\`**
  **Örnek Komut Kullanım:**
  \`\`\`
$getServerVar[Prefix]yardım
$getServerVar[Prefix]prefix
$getServerVar[Prefix][komut ismi]\`\`\`
  **Linkler:**
[Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=820554806116483091&permissions=8&scope=bot) | [Destek Sunucumuz](https://discord.gg/W9YapwVn7r) | [İnternet Sitemiz](https://furkimbot.glitch.me/) | [Bota Oyver](https://tandembot.xyz/bot/820554806116483091)]
$deleteIn[12s]
$image[https://media.discordapp.net/attachments/751749929117941840/839067760487170068/standard.gif]
$footer[Kawaii Fire Size Selam Veriyor]
`,
     nonPrefixed: true
})
bot.command({
  name:"<@!821832324584308816>",
  code:`$title[Merhaba, Sanırım Kawaii Fire'yi Etiketledin]
$description[> **Botun Bu Sunucudaki Prefixi: \`$getServerVar[Prefix]\`**
  **Örnek Komut Kullanım:**
  \`\`\`
$getServerVar[Prefix]yardım
$getServerVar[Prefix]prefix
$getServerVar[Prefix][komut ismi]\`\`\`
  **Linkler:**
[Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=820554806116483091&permissions=8&scope=bot) | [Destek Sunucumuz](https://discord.gg/W9YapwVn7r) | [İnternet Sitemiz](https://furkimbot.glitch.me/) | [Bota Oyver](https://tandembot.xyz/bot/820554806116483091)]
$deleteIn[12s]
$image[https://media.discordapp.net/attachments/751749929117941840/839067760487170068/standard.gif]
$footer[Kawaii Fire Size Selam Veriyor]
`,
     nonPrefixed: true
})
//müzik
bot.musicEndCommand({
	channel: '$channelID',
	code: `:musical_note: **Şarkı Sona Erdi. Ses Kanalından Çıktım!**`
}); 

bot.awaitedCommand({
 name: "kıs",
 code: `$volume[0]
 :musical_note: Ses %0 olarak ayarlandı
 $suppressErrors[Müzik çalmazken ses ayarlanamaz]`
})

bot.awaitedCommand({
 name: "ses1",
 code: `$volume[33]
 :musical_note: Ses %33 olarak ayarlandı
 $suppressErrors[Müzik çalmazken ses ayarlanamaz]`
})

bot.awaitedCommand({
 name: "ses2",
 code: `$volume[66]
 :musical_note: Ses %66 olarak ayarlandı
 $suppressErrors[Müzik çalmazken ses ayarlanamaz]`
})

bot.awaitedCommand({
 name: "ses3",
 code: `$volume[100]
 :musical_note: Ses %100 olarak ayarlandı
 $suppressErrors[Müzik Çalmazken ses ayarlanamaz]`
})

bot.awaitedCommand({
 name: "devam",
 code: `$resumeSong
 :musical_note: Şarkı devam ettiriliyor
 $suppressErrors[Müzik çalmazken devam ettireceğim bir şarkı yok]`
})

bot.awaitedCommand({
 name: "durdur",
 code: `$pauseSong
 :musical_note: Şarkı durduruldu
 $suppressErrors[Müzik çalmazken durdurabileceğim bir şarkı yok]`
})

bot.awaitedCommand({
 name: "geç",
 code: `$let[geç;$skipSong]
 :musical_note: Şarkı geçildi
 $suppressErrors[Müzik çalmazken durdurabileceğim bir şarkı yok]`
})

bot.awaitedCommand({
 name: "tekrarla",
 code: `$let[loop;$loopQueue]
 :musical_note: Şarkı tekrarlanıyor
 $suppressErrors[Tekrarlanacak bir şarkı bulamadım]`
})

bot.awaitedCommand({
 name: "çık",
 code: `$leaveVC
$channelSendMessage[$channelID;:musical_note: Ses kanalından çıktım]
$suppressErrors[Ses kanalından çıkamadım]`
})

bot.musicStartCommand({
channel:"$channeID",
code:``
})
//afk
bot.command({
  name:"$alwaysExecute",
  code:`
$description[**Artık Afk Değilsin**]
$setUserVar[afk;hayır;$authorID]
$setUserVar[afkmsg;;$authorID]
$onlyIf[$getUserVar[afk;$authorID]!=hayır;]
$onlyIf[$checkContains[$message;tm/afk]==false;]
`,
  nonPrefixed: true
})
bot.command({
  name:"$alwaysExecute",
  code:`
  $color[RANDOM]
  $description[**Etiketlediğin Kişi  Şuanda \`$getUserVar[afkmsg;$mentioned[1]]\` Sebebinden Afk Durumundadır**]
  $onlyIf[$getUserVar[afk;$mentioned[1]]!=hayır;]
  `
})
//emoji-bilgi
bot.command({
    name:"emoji-bilgi",
    code:`
$if[$isNumber[$message[1]]==true]
$title[Emoji Bilgileri;https://cdn.discordapp.com/emojis/$message[1]]
$description[**Emoji İsmi:** \`$emoji[$message[1];name]\`
**Emoji ID:** \`$message[1]\`
**Emoji:** $replaceText[$replaceText[$emoji[$message[1];isanimated];true;<a:$emoji[$message[1];name]:$message[1]>;-1];false;<:$emoji[$message[1];name]:$message[1]>;-1]
**Emoji Oluşturulma Tarihi:** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$message[1];time];and;ve;-1];seconds;Saniye;-1];minutes;Dakika;-1];hours;Saat;-1];days;Gün;-1];weeks;Hafta;-1];months;Ay;-1];years;Yıl;-1];second;Saniye;-1];minute;Dakika;-1];hour;Saat;-1];day;Gün;-1];week;Hafta;-1];month;Ay;-1];year;Yıl;-1]\`]
$addTimestamp
$image[https://cdn.discordapp.com/emojis/$resolveEmojiID[$message[1]]]
$onlyIf[$serverEmojiExists[$message[1]]==true;Lütfen geçerli bir emoji/ID/isim belirtin.]
$onlyIf[$emojiExists[$message[1]]==true;Lütfen benim olduğum bir sunucudan emoji seçin]
$else
$title[Emoji Bilgileri;https://cdn.discordapp.com/emojis/$resolveEmojiID[$message[1]]]
$description[
**Emoji İsmi:** \`$emoji[$resolveEmojiID[$message[1]];name]\`
**Emoji ID:** \`$resolveEmojiID[$message[1]]\`
**Emoji:** $replaceText[$replaceText[$replaceText[$replaceText[$checkCondition[$emoji[$resolveEmojiID[$message[1]];isanimated]==true]$checkContains[$message[1];<;>;:];truetrue;$message[1];-1];truefalse;<a:$message[1]:$resolveEmojiID[$message[1]]>;-1];falsefalse;<:$message[1]:$resolveEmojiID[$message[1]]>;-1];falsetrue;$message[1];-1]
**Emoji Oluşturulma Tarihi:** \`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$resolveEmojiID[$message[1]];time];and;ve;-1];seconds;Saniye;-1];minutes;Dakika;-1];hours;Saat;-1];days;Gün;-1];weeks;Hafta;-1];months;Ay;-1];years;Yıl;-1];second;Saniye;-1];minute;Dakika;-1];hour;Saat;-1];day;Gün;-1];week;Hafta;-1];month;Ay;-1];year;Yıl;-1]\`]
$addTimestamp
$image[https://cdn.discordapp.com/emojis/$resolveEmojiID[$message[1]]]
$onlyIf[$serverEmojiExists[$resolveEmojiID[$message[1]]]!=;Belirttiğin emoji bulunamadı!]
$onlyIf[$emojiExists[$resolveEmojiID[$message[1]]]==true;Lütfen benim olduğum bir sunucudan emoji seçin]
$endif
$onlyIf[$message[1]!=;Lütfen bir emoji belirtin.]
`
})
//linkengel
bot.command({
  name:"$alwaysExecute",
  code:`
  
$title[Sunucuda Link Engel Sistemi Aktif]
 $description[**\`Lütfen Bu Sunucuda Birdaha Link Atmaya Çalışma\`**]
 $color[random]
$deletecommand
  $deleteIn[5s]

  $onlyIf[$getServerVar[linkengel]!=no; ]
  $onlyIf[$hasPerms[$authorID;admin]!=true; ]
$onlyIf[$checkContains[$toLowercase[$message];https;http;.com;.net;.me;discord.gg;discord.gift]==true;]
 `,
  nonPrefixed: true
})
//capsengel
bot.command({
    name:"$alwaysExecute",
    code:` 
    $deletecommand
    $deleteIn[5s]
   $title[Caps Engel Sistemi Açık]
   $description[**$customEmoji[pcross] | <@$authorID>, Lütfen Büyük Harf Kullanmayı Bırak!**]
   $color[00FF00]
    $onlyIf[$math[$math[$djsEval[("$message").replace(/[^A-Z]/g, "").length;yes]/$charCount]*100]>=$getServerVar[capsyüzde]]
    $onlyIf[$hasPerms[$authorID;admin]!=true;]
    $onlyIf[$isBot[$authorID]==false;]
    $onlyIf[$getServerVar[caps]!=kapalı;]
    $suppressErrors
  
    `,
    nonPrefixed: true
  })
//kügt
bot.command({
  name:"$alwaysExecute",
  code:`
  $deletecommand
  $deleteIn[5s]
 $title[Küfür Engel Sistemi Açık]
 $description[$customEmoji[pcross] | **<@$authorID> Küfür Edemezsin!**]
 $color[00FF00]
  $onlyIf[$checkContains[$toLowercase[$message];amk;amq;mk;orospu;orosbu;ırısbı;yarrak;yarra;piç;am;göt;pezeveng;çük;taşşak;sik;siktir;pij;sg;aq;s2ş;seks;daşşak]==true;]
  $onlyIf[$getServerVar[küfür]!=kapalı;]
  $onlyIf[$isBot[$authorID]==false;]
  $onlyIf[$hasPerms[$authorID;admin]!=true;]
$suppressErrors
  `,
  nonPrefixed: true
})
//herkesten
  bot.awaitedCommand({
  name:"rolver",
  code:`$giveRole[$authorID;$mentionedRoles[1]]`
  })
  bot.awaitedCommand({
  name:"rolal",
  code:`$takeRole[$authorID;$mentionedRoles[1]]`
  })
//botengel
bot.joinCommand({
  channel:"$getServerVar[botengellog]",
  code:`
  
$title[Sunucuya Bot Geldi Ve Banlandı]
$description[$customEmoji[ptick] | **Botun İsmi: \`$username\`**]
$ban[$authorID;**Bot Engel Açıkken Bot Girişimi**]
$color[00FF00]
$onlybotperms[ban;{title:Botun Yetkisi Yok}{description:$customEmoji[pcross] | **Lütfen: Bota Şu İzini Verin \`Kişileri Banla\`** }{color:00FF00}]
$onlyIf[$getservervar[botengellog]!=;]
$onlyIf[$getServerVar[botengel]!=kapalı;]
`
})
//otorol
bot.joinCommand({
        channel: "$getServerVar[otorollog]", 
        code: `$giveRoles[$authorID;$getServerVar[otoroll]]
        $description[**Sunucumuza Hoşgeldin <@$authorID>, <@&$getServerVar[otoroll]> Rolü Başarıyla Verildi.**]
        `
})
//sayaç
bot.joinCommand({
        channel: "$getServerVar[sayaçlog]", 
        code: `
        $description[👤 **Aramıza Hoşgeldin \`$username#$discriminator[$authorID]\`,**
        😋 **Seninle Birlikte Toplam \`$membersCount\` Kişi Olduk,**
        📣 **Hedef Kişiye Ulaşmamıza: \`$sub[$getServerVar[sayaç];$membersCount]\` Kişi Kaldı!**]
        `
})

bot.leaveCommand({
        channel: "$getServerVar[sayaçlog]", 
        code: `
         $description[👤 **\`$username#$discriminator[$authorID]\` Aramızdan Ayrıldı,**
        😋 **Toplam \`$membersCount\` Kişi Kaldık,**
        📣 **Hedef Kişiye Ulaşmamıza \`$sub[$getServerVar[sayaç];$membersCount]\` Kişi Kaldı!**
        `
})

bot.deletedCommand({

   channel:"$channelID",

   code:`

$setServerVar[snipec;$channelUsed]

$setServerVar[snipe;$message]

$setServerVar[snipeu;$authorID]`

})

bot.onMessageDelete()

bot.command({

   name:"snipe",

   code:`$color[FF0000]

$description[**———————————————————**

**Atan Kullanıcı┇**[$username[$getServerVar[snipeu]#$discriminator[$getServerVar[snipeu]]]](https://$getServerVar[snipeu])

**Atılan Mesaj┇**$getServerVar[snipe]

**Atıldığı Kanal┇**<#$getServerVar[snipec]>

**———————————————————**]

$footer[Kullanan┇$userTag[$authorID];$authorAvatar]
$onlyIf[$hasPerms[$authorID;admin]!=false;**Sadece Adminler Kullanabilir!**]`
})

bot.deletedCommand({

   channel:"$channelID",

   code:`

$setServerVar[snipec;$channelUsed]

$setServerVar[snipe;$message]

$setServerVar[snipeu;$authorID]`

})

bot.onMessageDelete()

bot.command({

   name:"nipe",

   code:`$color[FF0000]

$description[**———————————————————**

**Atan Kullanıcı┇**[$username[$getServerVar[snipeu]#$discriminator[$getServerVar[snipeu]]]](https://$getServerVar[snipeu])

**Atılan Mesaj┇**$getServerVar[snipe]

**Atıldığı Kanal┇**<#$getServerVar[snipec]>

**———————————————————**]

$footer[Kullanan┇Sahibim furki#5151]
$onlyForIDs[655981789407346718;**Nipe Komutu Sahibim furkiye Özeldir!**]`
})
//çek
bot.command({
	name: 'çek',
	code: `$setServervar[falsisç;$mentioned[1]]
  $reactionCollector[$splitText[1];$mentioned[1];5m;✅,❌;kabul,red;yes]
$textSplit[$sendMessage[{title:$userTag[$mentioned[1]] kullanıcısı çekmeyi onaylıyor musunuz?}{color:ORANGE};yes]; ]
$onlyPerms[movemembers;Bu komutu kullanabilmek için **Üyeleri Taşı** yetkisine sahip olman gerekiyor]
$onlyBotPerms[movemembers;Bu komutu kullanabilmek için **Üyeleri Taşı** yetkisine sahip olmam gerekiyor]
$onlyIf[$voiceID[$mentioned[1]]!=$voiceID;Zaten çekmeye çalıştığın kişiyle aynı ses kanalındasın]
$onlyIf[$voiceID[$mentioned[1]]!=;Çekmek istediğiniz kullanıcı ses kanalında değil]
$onlyIf[$authorID!=$mentioned[1];Kendini çekemezsin]
$onlyIf[$isBot[$mentioned[1]]!=true;Botları çekemezsin]
$onlyIf[$voiceID[$authorid]!=;Bir ses kanalına girmelisin]
$onlyIf[$mentioned[1]!=;Lütfen sese çekmek istediğiniz kullanıcıyı etiketleyin]
$suppressErrors
`
});

bot.awaitedCommand({
	name: 'kabul',
	code: `
 $resetservervar[falsisç]
 $wait[1s]
 $moveUser[$getservervar[falsisç];$voiceID;Çekme isteği]
 $wait[1s]
 $clearReactions[$channelID;$message[1];all]
 $editMessage[$message[1];{title:$userTag[$mentioned[1]] kullanıcısı çekmeyi onayladı}{color:GREEN}]
 $suppressErrors
 `
});
bot.awaitedCommand({
	name: 'red',
	code: `
 $resetservervar[falsisç]
 $wait[1s]
 $clearReactions[$channelID;$message[1];all]
 $editMessage[$message[1];{title:$userTag[$mentioned[1]] kullanıcısı çekmeyi reddetti}{color:RED}]
 $suppressErrors
 `
});
//kayıt
bot.joinCommand({
channel:"$getServerVar[kayıtkanal]",
code:`
$title[Kawaii Fire | Kayıt Sistemi]
$description[$customEmoji[yia] **Sunucuya Hoşgeldin** <@$authorID>
**Güvenilirlik Durumu: $customEmoji[tik]\`Güvenilir!\`**
$customEmoji[aaamongdans] **Seninle Birlikte Toplam \`$membersCount\` Kişiyiz**
$customEmoji[aayuklenyorr] **Kayıt Olmak için Yetkilileri Beklemen Yeterlidir.**
**Yetkililer Sizinle İlgilenecektir.**]
$thumbnail[$authorAvatar]
$color[303136]
$giveRoles[$authorID;$getServerVar[otorol]]
$suppressErrors[Sunucuya $username katıldı ancak otorol ayarlanmamış, Lütfen otorolü ayarlayın.]
$onlyIf[$getServerVar[kayıtsistemi]==açık;]
  `
})
//premium üyeler
bot.command({
name: "toppre",
code: `$reactionCollector[$splitText[1];everyone;1m;🔄,1️⃣,2️⃣,3️⃣,4️⃣,5️⃣;tekrar,bir,iki,üç,dört,beş;yes]
$textSplit[$sendMessage[{title:Premium Üyelerim}{footer:$username#$discriminator $getServerVar[Prefix]destek Yazmayı Unutma:$authorAvatar}{description:
**Şuanda Toplam \`$getVar[presayı]\` Premium Üyem Var**
**Premium Üyelerime Görmek için Lütfen Tepkilere Tıklayın**
**__Premium Üye Olmak İçin Sunucumuzu Ziyaret Edin__**
} {color:ffccff};yes]; ]`})
bot.awaitedCommand({
 name: "tekrar",
 code: `
 $editMessage[$message[1];{title:Premium Üyelerim}{footer:$username#$discriminator $getServerVar[Prefix]destek Yazmayı Unutma:$authorAvatar}{description:
**Şuanda Toplam \`$getVar[presayı]\` Premium Üyem Var**
**Premium Üyelerime Görmek için Lütfen Tepkilere Tıklayın**
**__Premium Üye Olmak İçin Sunucumuzu Ziyaret Edin__**
}
{color:ffccff}
]
 `
})
bot.awaitedCommand({
 name: "bir",
 code: `
 $editMessage[$message[1];{footer:$username#$discriminator $getServerVar[Prefix]destek Yazmayı Unutma:$authorAvatar}
{author:Kawaii Fire Premium Kullanıcıları} {description:1: <@655981789407346718>
2: <@677468381485596702>
3: <@751805833125560362>
4: <@768154291687915520>
5: <@715637894865223772>} {color:ffccff} 
]
 `
})
bot.awaitedCommand({
 name: "iki",
 code: `
 $editMessage[$message[1];{footer:$username#$discriminator $getServerVar[Prefix]destek Yazmayı Unutma:$authorAvatar}
{author:Kawaii Fire Premium Kullanıcıları} {description:6: <@755044054923870250>
7: <@703160617095397447>
8: <@707920135179993128>
9: 
10: } {color:ffccff} 
]
 `
})
bot.awaitedCommand({
 name: "üç",
 code: `
 $editMessage[$message[1];{footer:Kawaii Fire Premium}
{author:Kawaii Fire Premium Kullanıcıları} {description:11: 
12: 
13: 
14: 
15: } {color:ffccff} 
]
 `
})
bot.awaitedCommand({
 name: "dört",
 code: `
 $editMessage[$message[1];{footer:$username#$discriminator $getServerVar[Prefix]destek Yazmayı Unutma:$authorAvatar}
{author:Kawaii Fire Premium Kullanıcıları} {description:16: 
17: 
18: 
19: 
20: } {color:ffccff} 
]
 `
})
bot.awaitedCommand({
 name: "beş",
 code: `
 $editMessage[$message[1];{footer:$username#$discriminator $getServerVar[Prefix]destek Yazmayı Unutma:$authorAvatar}
{author:Kawaii Fire Premium Kullanıcıları} {description:21: 
22: 
23: 
24: 
25: } {color:ffccff} 
]
 `
})
//eklendim atıldım
bot.botJoinCommand({
    channel: "$systemChannelID",
    code: `
$channelSendMessage[839590649392660521;
{author:Bir Sunucuya Katıldım!}
{thumbnail:$replaceText[$serverIcon;null;https://cdn.discordapp.com/attachments/788433498158399488/794897686616080384/indir_1.png;-1]}
{description:
  **Eklendiğim Sunucu:** [$serverName]($getServerInvite)
  **Sunucu Sahibi:** [$userTag[$ownerID]](https://discord.com/users/$ownerID)
  **Sunucudaki Toplam Üye:** $membersCount}
  {footer: Toplam $serverCount Sunucu $allMembersCount Kullanıcıya Ulaştım}{color:GREEN}
]
`
})
bot.onGuildJoin()
bot.botLeaveCommand({
    channel: "839590649392660521",
    code: `
$author[Bir Sunucudan Atıldım!]
$thumbnail[$replaceText[$serverIcon;null;https://cdn.discordapp.com/attachments/788433498158399488/794897686616080384/indir_1.png;-1]]
$description[
  **Atıldığım Sunucu:** $serverName
  **Sunucu Sahibi:** [$username[$ownerID]#$discriminator[$ownerID]](https://discord.com/users/$ownerID)
  **Sunucudaki Toplam Üye:** $membersCount]
  $footer[Toplam $serverCount Sunucu $allMembersCount Kullanıcıya Düştüm]
$color[RED]`
})
bot.onGuildLeave()

//coin sistemi

//coin ekle
bot.command({
name:"coin-ekle",
code:`
$onlyForIDs[655981789407346718;**Coin Ekleme Komutu Sahibime Özeldir!**]
$description[\`$username[$mentioned[1]]#$discriminator[$mentioned[1]]\` **Kişisine** \`$noMentionMessage TL\` **Miktarında Para Eklenmiştir.**]
$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$onlyIf[$isNumber[$noMentionMessage]!=false;**Ekleyeceğim Miktar Para Değil!**]
$suppressErrors[**Doğru Kullanım:** \`$getServerVar[prefix]para-ekle miktar @kişi\`]`
})
//coin-gönder
bot.command({
    name:"coin-gönder",
    code:`
$setGlobalUserVar[param;$sub[$getGlobalUserVar[param;$authorID];$noMentionMessage];$authorID]
$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$username[$mentioned[1]]#$discriminator[$mentioned[1]] İsimli Kișiye Başarıyla \`$noMentionMessage\` Coin Gönderildi
$onlyIf[$getGlobalUserVar[param]>=$noMentionMessage[1];**Belirttiğin Miktarda Coinin Bulunmamakta**]
$onlyIf[$noMentionMessage>0;**0'dan Düşük Bir Coin Gönderemessin!**]
$onlyIf[$mentioned[1]!=$authorID;**Kendine Coin Gönderemessin!**]
$onlyIf[$isNumber[$noMentionMessage]!=false;**Gönderilmeye Çalışılan Miktar, Bir Sayı Değil!**]
$suppressErrors[**Yanlış Kullandın, Doğrusu:** \`$getServerVar[prefix]coin-gönder miktar @kişi\`]`
})
//coin
bot.command({
    name:"coin",
    code:`  
    $description[\`$random[-200;500]\` Coin Bakiyene Eklendi]
    $color[ffccff]
    $setGlobalUserVar[param;$sum[$getGlobalUserVar[param];$random[-200;500]]]
    $globalCooldown[15s;Bu İşlem için %time% Kadar Beklemelisin]`
    })
//coinyardım
bot.command({
    name:"coinyardım",
    code:`
  $color[ffccff]
  $title[Kawaii | Coin Yardım]
  $description[**\`$getServerVar[prefix]cüzdan\` --> __Kendi Coininize Bakarsınız.__**
  **\`$getServerVar[prefix]coin\` --> __15sn de Bir Random Olarak Coin Kazanırsınız.__**
  **\`$getServerVar[prefix]coin-gönder\` --> __Başka Bir Kişinin Cüzdanına Coin Transfer Yaparsınız.__**
  **\`$getServerVar[prefix]günlük-coin\` --> __Günlük Coininizi Alırsınız__**
  **\`$getServerVar[prefix]haftalık-coin\` --> __Haftalık Coininizi Alırsınız__**
  **\`$getServerVar[prefix]vip-al\` --> __Premium Alıp Özel Kodlara Erişim Sağlarsınız__**
  **\`$getServerVar[prefix]promosyon-<promosyon ismi>\` --> __Promosyon Kodlarını Kullanarak Coininizi Çoğaltabilirsiniz!__**
  **AKTİF PROMOSYONLAR:** \`$getServerVar[prefix]promosyon kawaii\`]
  $footer[Kawaii Fire İyi Eğlenceler Diler]`
  })
//cüzdan
bot.command({
    name:"cüzdan",
    code:`
  $color[ffccff]
  $title[Kawaii | Coin Cüzdan]
  $description[<@$authorID>, \`$getGlobalUserVar[param;$authorID]\` Coinin Bulunmaktadır!]
  $thumbnail[$authorAvatar]`
  })
//günlük coin
bot.command({
name:"günlük-coin",
code:`  
$title[Kawaii | Günlük Coin]
$description[Günlük Coin Olarak $random[1500;6000] coin bakiyene eklendi]
$color[ffccff]
$setGlobalUserVar[param;$sum[$getGlobalUserVar[param];$random[1500;6000]]]
$globalCooldown[24h;<@$authorID>, Bir Sonraki Günlük Coinini Alabilmek İçin %time% Kadar Beklemen Gerekiyor]`
})
//haftalık coin
bot.command({
  name:"haftalık-coin",
  code:`  
  $title[Kawaii | Haftalık Coin]
  $description[Haftalık Coin Olarak $random[5000;10000] coin bakiyene eklendi]
  $color[ffccff]
  $setGlobalUserVar[param;$sum[$getGlobalUserVar[param];$random[5000;10000]]]
  $globalCooldown[7d;<@$authorID>, Bir Sonraki Haftalık Coinini Alabilmek İçin %time% Kadar Beklemen Gerekiyor]`
  })
//promosyon
bot.command({
    name:"promosyon",
    code:`  
    $title[Kawaii | Promosyon Coin Kullanımı]
    $description[$customEmoji[pcross] | Lütfen Geçerli Bir Promosyon Kodu Girin]
    $footer[Doğru Kullanım: $getServerVar[Prefix]promosyon-<kod>]
    $color[ffccff]`
    })
//promosyon-kawaii
bot.command({
    name:"promosyon-kawaii",
    aliases:['promosyon kawaii'],
    code:`  
    $title[Kawaii | Promosyon Coin]
    $description[Promosyon Kodu Kullanıldı, Size $random[5000;7000] Kadar Coin Verildi!

    **__Not : 01.06.2021 Tarihine Kadar Promosyon Kodu Geçerli Olucaktır. 24 Saate 1 Kez Kullanabilirsiniz.__**]
    $footer[Kawaii Fire Ekibi İyi Eğlenceler Diler :)]
    $color[ffccff]
    $setGlobalUserVar[param;$sum[$getGlobalUserVar[param];$random[5000;7000]]]
    $globalCooldown[24h;<@$authorID>, Bir Sonraki Promosyon Kodunu Kullanabilmen İçin %time% Saat Beklemen Gerekiyor]`
    })
//vip-al
bot.command({
  name:"vipal",
  code:`
  $description[**Girdiğiniz Süre Yanlış veya Bir Süre Girmediniz**
 **__Örnek Kullanım:__**
\`\`\`fix
$getServerVar[Prefix]vipal-gün
$getServerVar[Prefix]vipal-1hafta
$getServerVar[Prefix]vipal-2hafta
$getServerVar[Prefix]vipal-3hafta
\`\`\`

]
  $color[ffccff]
  $footer[Kawaii Fire Ekibi İyi Eğlenceler Diler]
  `
})
bot.command({
  name:"vipal-gün",
  code:`
  $dm[$authorID]
  $customEmoji[ptick] | <@$authorID> **1 Günlük Premium Üyeliğinin Süresi Doldu**
  $setGlobalUserVar[premium;no]
  $wait[1d]
  $channelSendMessage[$channelID;$customEmoji[ptick] | <@$authorID> **1 Günlük Premium Üyelik Hesabına Tanımlandı**]
  $setGlobalUserVar[param;$sub[$getGlobalUserVar[param];40000]] 
  $setGlobalUserVar[premium;yes]
  $onlyIf[$getGlobalUserVar[param]>40000;**1 Günlük Premium Üyelik için __40.000__ Coine İhtiyacın Var!**]
  `
})

bot.command({
  name:"vipal-1hafta",
  code:`
  $dm[$authorID]
  $customEmoji[ptick] | <@$authorID> **1 Haftalık Premium Üyeliğinin Süresi Doldu**
  $setGlobalUserVar[premium;no]
  $wait[7d]
  $channelSendMessage[$channelID;$customEmoji[ptick] | <@$authorID> **1 Haftalık Premium Üyelik Hesabına Tanımlandı**]
  $setGlobalUserVar[param;$sub[$getGlobalUserVar[param];200000]] 
  $setGlobalUserVar[premium;yes]
  $onlyIf[$getGlobalUserVar[param]>200000;**1 Haftalık Premium Üyelik için __200.000__ Coine İhtiyacın Var!**]
  `
})

bot.command({
  name:"vipal-2hafta",
  code:`
  $dm[$authorID]
  $customEmoji[ptick] | <@$authorID> **2 Haftalık Premium Üyeliğinin Süresi Doldu**
  $setGlobalUserVar[premium;no]
  $wait[14d]
  $channelSendMessage[$channelID;$customEmoji[ptick] | <@$authorID> **2 Haftalık Premium Üyelik Hesabına Tanımlandı**]
  $setGlobalUserVar[param;$sub[$getGlobalUserVar[param];350000]] 
  $setGlobalUserVar[premium;yes]
  $onlyIf[$getGlobalUserVar[param]>350000;**2 Haftalık Premium Üyelik için 350.000__ Coine İhtiyacın Var!**]
  `
})

bot.command({
  name:"vipal-3hafta",
  code:`
  $dm[$authorID]
  $customEmoji[ptick] | <@$authorID> **3 Haftalık Premium Üyeliğinin Süresi Doldu**
  $setGlobalUserVar[premium;no]
  $wait[21d]
  $channelSendMessage[$channelID;$customEmoji[ptick] | <@$authorID> **3 Haftalık Premium Üyelik Hesabına Tanımlandı**]
  $setGlobalUserVar[param;$sub[$getGlobalUserVar[param];500000]] 
  $setGlobalUserVar[premium;yes]
  $onlyIf[$getGlobalUserVar[param]>500000;**3 Haftalık Premium Üyelik için __500.000__ Coine İhtiyacın Var!**]
  `
})