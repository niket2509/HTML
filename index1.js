let screen, buttonText;
screen = document.getElementById('screen');
buttons = document.queryCommandValue('button')
for(item of buttons){
  item.addEventListener('click',
    (e) => {
      buttonText = e.target.innerText;
      console.log('Button Text is', buttonText)

    })
}

