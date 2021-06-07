module.exports = ({
name:"panel",
code:`$reactionCollector[$splitText[1];$getservervar[şarkı];1h;🔇,🔈,🔉,🔊,▶️,⏸,⏯,🔁,⏹;kıs,ses1,ses2,ses3,devam,durdur,geç,tekrarla,çık;yes]
$textSplit[$sendMessage[{title:$username[$clientID] Müzik Paneli}{description:**Müzik Panelinin Komutları Aşağıda Yer Alıyor**
**Aşağıdaki Emojilere Tıklayarak Bu İşlevleri Kullanabilirsiniz,**

🔇 - Sesi \`%0\` Yapar
🔈 - Sesi \`%33\` Yapar
🔉 - Sesi \`%66\` Yapar
🔊 - Sesi \`%100\` Yapar
▶️ - Şarkıya Devam Ettirir.
⏸ - Şarkıyı Durdurur
⏯️ - Şarkıyı Geçer 
🔁 - Şarkıyı Tekrarlar 
⏹ - Şarkıyı Bitirir

**Şarkı Bilgisi**
$customEmoji[dans] **Bulunan Müzik:** [$songInfo[title]]($songInfo[url])
$customEmoji[remoji] **Kalan Süre:** \`$replaceText[$songInfo[duration_left];Seconds;Saniye;-1]\`
$customEmoji[remoji] **Müzik uzunluğu:** \`$replaceText[$replaceText[$songInfo[duration];Seconds;Saniye;-1];Second;Saniye;-1]\`
$customEmoji[aamongdans] **Müzik Açıklaması:** \`$songInfo[description]\`
$customEmoji[ayuklenyorr] **Müzik Linki:** [Tıkla]($songInfo[url])
$customEmoji[emoji_90] **Müzik Kanalı:** [$songInfo[publisher]]($songInfo[publisher_url])
$customEmoji[aarazordiamond] **Çalan Kişi:** <@$songInfo[userID]>
}{color:303136}{thumbnail:$songInfo[thumbnail]}{footer:Paneli Sadece Şarkıyı Son Başlatan Kişi Kullanabilir. Şuanda Paneli Sadece $userTag[$getservervar[şarkı]] Kullanabilir.:$userAvatar[$getservervar[şarkı]]};yes]; ]
$onlyIf[$voiceID[$clientID]!=;$customEmoji[pcross] | **Şarkı Çalmazken Paneli Kullanamazsın**]
$onlyIf[$voiceID!=;$customEmoji[pcross] | **Bir Ses Kanalına Girmezsen Paneli Kullanamazsın**]
$onlyIf[$jsonRequest[https://tandembotxyz.beratozen.repl.co/api/820554806116483091/voted/$authorid;hasvote]==true;{title:Oy Verme Zamanı!}{description:**Bu komutu kullanabilmek için [Bota Oy Vermeniz](https://tandembotxyz.beratozen.repl.co/bot/820554806116483091/vote) gerekmektedir. Oy Vermek için [Tıkla](https://tandembotxyz.beratozen.repl.co/bot/820554806116483091/vote)**}{color:RED}{footer:Unutma 12 Saatte Bir Oy Verebilirsin}] `
})