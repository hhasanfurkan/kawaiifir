module.exports = ({
name:"eject",
code:`
$argsCheck[>2;**Doğru Kullanım: \`kf-eject @kişi black|blue|brown|cyan|darkgreen|lime|orange|pink|purple|red|white|yellow\`**]
$image[https://vacefron.nl/api/ejected?name=$replaceText[$username[$mentioned[1;yes]]; ;%20;-1]&impostor=false&crewmate=$replaceText[$message[2]; ;%20;-1]]`
})