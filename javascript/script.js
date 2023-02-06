function Executar(){
  var dia = document.querySelector('#dia')
  var horas = document.querySelector('#horas')
  var minutos = document.querySelector('#minutos')
  var segundos = document.querySelector('#segundos')

  var date = new Date()

  dia.innerText = date.getDate()
  horas.innerText = date.getHours()
  minutos.innerText = date.getMinutes()
  segundos.innerText = date.getSeconds()
}

