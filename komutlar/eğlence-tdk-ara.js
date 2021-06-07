module.exports = ({ 
name:"tdk-ara",
code:`$color[RANDOM]

$title[Türk Dil Kurumun'da $message[1] Aranıyor🔎]
$description[

**Aranan Kelime:** ||$message[1]||

**Bulunan Kelimenin Anlamı:**

\`$jsonRequest[http://www.plantiostudio.ml/api/sozluk?kelime=$message[1];anlam;{color:RED}{title: Üzgünüm $message[1] Kelimesi Bulunmuyor}]\`

**Kelimenin Lisanı:** \`$jsonRequest[http://www.plantiostudio.ml/api/sozluk?kelime=$message[1];lisan;{color:RED}{title: Üzgünüm $message[1] Kelimesi Bulunmuyor}]\`

**Kelime Örneği:** \`$jsonRequest[http://www.plantiostudio.ml/api/sozluk?kelime=$message[1];ornek;{color:RED}{title: Üzgünüm $message[1] Kelimesi Bulunmuyor}]\`

**Kelime İle İlgili Atasözü:** \`$jsonRequest[http://www.plantiostudio.ml/api/sozluk?kelime=$message[1];atasozu;{color:RED}{title: Üzgünüm $message[1] Kelimesi Bulunmuyor}]\`]`
})