function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = (`Agora são ${hora} hora(s)`)
    if (hora >= 4 && hora <= 12) {
        // Dia
        img.src = 'dia.jpg'
        document.body.style.background = '#f1e5b0'
    } else if (hora >= 12 && hora <= 17 ) {
        // Tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#fc8e28'
    } else if (hora >= 18 && hora <= 24) {
        // Noite
        img.src = 'noite.jpg'
        document.body.style.background = '#000029'
    } else if (hora >= 0 && hora < 4) {
        img.src = 'noite.jpg'
        document.body.style.background = '#000029'
    }
}
