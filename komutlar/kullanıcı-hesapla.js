module.exports = {
name:"hesapla",
code:`
$onlyIf[$checkContains[$message[2];*;/;+;-]==true;Argüman Geçersiz Geçerli olanlar : \`*, /, +, -\`]
$onlyIf[$isNumber[$message[1]]==true;❌ | $message[1] bir sayı değil. Lütfen geçerli bir sayı gir]
$onlyIf[$message[2]==true;:x:  Bir Prefix Girmen Gerekir]
$onlyIf[$isNumber[$message[3]]==true;❌ | $message[3] bir sayı değil. Lütfen geçerli bir sayı gir]
$argsCheck[3;Lütfen Örnek Kullanıma Uyunuz. Örnek Kullanım: \`-hesapla 1+1\`]
$author[Hesap Makinesi]
$authorIcon[$authorAvatar]
$description[
İşlem : \`$noMentionMessage\`
Cevap : \`$numberSeparator[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];*;multi;1];+;sum;1];/;divide;1];-;sub;1][$message[1];$message[3]];,]\`
\`%$randomText[1️⃣;2️⃣;3️⃣;4️⃣;5️⃣;6️⃣;7️⃣;8️⃣;9️⃣;1️⃣0️⃣;1️⃣5️⃣;2️⃣5️⃣;2️⃣5️⃣;2️⃣5️⃣;2️⃣5️⃣;2️⃣5️⃣;2️⃣9️⃣;3️⃣1️⃣;3️⃣1️⃣;3️⃣1️⃣;3️⃣1️⃣;3️⃣1️⃣;3️⃣1️⃣;6️⃣2️⃣;️️5️⃣0️⃣;5️⃣0️⃣;5️⃣0️⃣;5️⃣0️⃣;5️⃣0️⃣;5️⃣0️⃣;5️⃣0️⃣;4️⃣2️⃣;3️⃣2️⃣;5️⃣0️⃣;7️⃣2️⃣;9️⃣8️⃣;1️⃣0️⃣0️⃣;1️⃣0️⃣0️⃣;1️⃣0️⃣0️⃣;1️⃣3️⃣;3️⃣0️⃣;8️⃣5️⃣;5️⃣6️⃣;7️⃣9️⃣;7️⃣9️⃣;9️⃣4️⃣;1️⃣1️⃣;1️⃣0️⃣;1️⃣0️⃣1️⃣;1️⃣0️⃣1️⃣;4️⃣0️⃣4️⃣;3️⃣1️⃣;3️⃣1️⃣;3️⃣1️⃣;8️⃣2️⃣;2️⃣1️⃣;2️⃣3️⃣;2️⃣0️⃣;2️⃣9️⃣;7️⃣0️⃣;0️⃣7️⃣] Puan Verdim\` 
\`$randomText[⭐;⭐⭐;⭐⭐;⭐⭐⭐;⭐⭐⭐;⭐⭐⭐;⭐⭐⭐⭐;⭐⭐⭐⭐;⭐⭐⭐⭐⭐;⭐;⭐⭐;⭐⭐;⭐⭐⭐;⭐⭐⭐;⭐⭐⭐;⭐⭐⭐⭐;⭐⭐⭐⭐;⭐⭐⭐⭐⭐] Yıldız verdim..\`]
$image[https://squezelt.sirv.com/jsjsj/saygas%C4%B1uyas.png?text.0.text=$numberSeparator[$$replaceText[$replaceText[$replaceText[$replaceText[$message[2];*;multi;1];+;sum;1];/;divide;1];-;sub;1][$message[1];$message[3]];,]&text.0.position.y=-73%25&text.0.size=$random[22;50]&text.0.color=000000]
$footer[$username]
$addTimestamp
$thumbnail[$authorAvatar]
$color[#303136]
$suppressErrors[Hob, Bu işlemi yapacak zekaya sahip değilim]`
}