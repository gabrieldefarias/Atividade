function enviar(){
    var dataatual = new Date()
    var ano = dataatual.getHours()
    var anonasc = document.getElementById('txtano')
    var nome = document.getElementById('txtnome')

    var image = document.createElement('img')
    image.setAttribute('id','foto')
    image.setAttribute('src','obrigado.jpg')
    var fim = document.querySelector('div#fim')

    if (anonasc.value <= 1919 || Number(anonasc.value > ano)) {
        window.alert('[ERRO] \n Verifique os dados do seu formulário')
    } else {
        var idade = ano - Number(anonasc.value)
        alert('Obrigado sr(a) '+nome.value+ ', '+idade+', seus dados foram enviados com sucesso.')
        fim.appendChild(image)
    }
}
function obterhora(){
    var dataatual = new Date()
    var tex = document.getElementById('tex')
    var hora = dataatual.getHours()
    if (hora < 12){
        tex.innerHTML = 'Bom dia'
    }
}