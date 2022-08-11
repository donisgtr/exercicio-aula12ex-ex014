function carregar() {
  const msg = document.getElementById('msg')
  const img = document.getElementById('img')
  const data = new Date()
  const hora = data.getHours()
  msg.innerHTML = `agora são ${hora} horas`
  if (hora >= 0 && hora < 12) {
    img.src = 'fotos/manha.jpg'
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora <= 18) {
    img.src = 'fotos/tarde.jpg'
    document.body.style.background = '#b9846f'
  } else {
    img.src = 'fotos/noite.jpg'
    document.body.style.background = '#515154'
  }
}
