function carregar(){
var msg = window.document.getElementById('msg')
var imgagem = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 21
msg.innerHTML= `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    imgagem.src = 'DIA.png'
    document.body.style.background = '#F0E68C'
}else if(hora >=12 && hora < 18){
    imgagem.src = 'TARDE.png'
    document.body.style.background = '#FFE4C4'
}else{
    imgagem.src = 'NOITE.png'
    document.body.style.background = "#B0E0E6"
}
}