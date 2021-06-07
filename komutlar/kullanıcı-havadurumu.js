module.exports = ({

 name: "havadurumu",
    
 aliases:['hava-durumu'],     

 code: `

$color[RANDOM]

$title[$message Hava Durumu]

$description[$thumbnail[https://cdn.discordapp.com/attachments/787004564888879126/788917095479246888/indir-removebg-preview.png]

**Bölge:** \`$replaceText[$jsonRequest[http://api.somecool.repl.co/weather?place=$message;location;];Turkey;Türkiye;-1]\`

**Sıcaklık:** \`$replaceText[$jsonRequest[http://api.somecool.repl.co/weather?place=$message;temperature;];Celcius;Derece;-1]\`

**Nem:** \`$jsonRequest[http://api.somecool.repl.co/weather?place=$message;humidity;]\`

**Rüzgar hızı:** \`$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_speed;]\`

**Rüzgar Göstergesi:** \`$replaceText[$replaceText[$replaceText[$replaceText[$jsonRequest[http://api.somecool.repl.co/weather?place=$message;wind_display;];East;Doğu;-1];West;Batı;-1];North;Kuzey;-1];South;Güney;-1]\`

**Gözlem Zamanı:** \`$jsonRequest[http://api.somecool.repl.co/weather?place=$message;observation_time;]\`

]

$onlyIf[$message!=;**Bir Bölge İsmi Gir!**]`

});