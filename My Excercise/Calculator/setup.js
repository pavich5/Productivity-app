let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(buttons => {
  buttons.addEventListener('click', (e)=>{
    switch(e.target.innerText){
      case 'C':
        display.innerText = ''
        break;
      case '←':
        display.innerText = display.innerText.slice(0,-1)
        break;
      case '=':
        try{
          display.innerText = eval(display.innerText);
        }
        catch{
          if(display.innerText = "ERROR!" && e.target.innerText == 'C'){
            display.innerText = ''
          }
          display.innerText = "ERROR!"
        }
        break;
      default:
        display.innerText += e.target.innerText;
        
    }
  }) 
})