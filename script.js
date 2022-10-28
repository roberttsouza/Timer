//setando as variaveis do relogio

let sec = 00;
let min = 00;
let hr = 00;
const watch = document.querySelector("#watch"); 

//função para adicionar um zero a frente dos variaveis
function twoDigits(digits){
  if(digits<10){
    return('0'+digits)
  }else{
    return(digits)
  }
}

//arrowfunction para acrescentar um segundo ao relogio
start = () => {
  conter()
  interval = setInterval(conter,1000)
}

//função para parar o relogio
pause = () => {
  clearInterval(interval)
}
//função para zerar o relogio
stop = () => {
  clearInterval(interval)
  hr=0
  min=0
  sec=0
  watch.innerHTML = `${twoDigits(hr)}:${twoDigits(min)}:${twoDigits(sec++)}`
}


//função que aprsenta na tela o timer e 
function conter(){
  if(sec==60){
    min++
    sec=0
  }if(min==60){
    hr++
    min=0
    sec=0
  }
  watch.innerHTML = `${twoDigits(hr)}:${twoDigits(min)}:${twoDigits(sec++)}`;
}
