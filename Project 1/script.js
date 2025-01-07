let elems = document.querySelectorAll('.button')
let body = document.querySelector('body')
body.style.backgroundColor = '#168181'
elems.forEach(function(item){
  item.addEventListener('click',function(e){
    const targatedElm = e.target.id
    if(targatedElm === 'grey'){
      body.style.backgroundColor = targatedElm
    }
    if(targatedElm === 'white'){
      body.style.backgroundColor = targatedElm
    }
    if(targatedElm === 'blue'){
      body.style.backgroundColor = targatedElm
    }
    if(targatedElm === 'yellow'){
      body.style.backgroundColor = targatedElm
    }
  })
})