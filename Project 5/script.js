let baseUrl = 'https://latest.currency-api.pages.dev/v1/currencies/'
let btn = document.querySelector('#btn')
let fromsl = document.querySelector('.from select')
let tosl = document.querySelector('.to select')
let select = document.querySelectorAll('select')
select.forEach((elem)=>{
    for (let currCode in countryList) {
       let option = document.createElement('option')
       option.value = currCode
       option.innerText = currCode
       if(elem.name === 'from' && currCode === 'USD'){
        option.selected = 'selected'
       }
       else if (elem.name === 'to' && currCode === 'INR') {
        option.selected = 'selected'
       }
       elem.append(option)
    }
    elem.addEventListener('change',(e)=>{
     flagChang(e.target)
    })
})

function flagChang(elem){
    let img = elem.parentElement.querySelector('img')
    let flagName = countryList[elem.value]
    img.src = `https://flagsapi.com/${flagName}/flat/64.png`
}

btn.addEventListener('click', async (evt)=>{
    evt.preventDefault()
    let amtVal = document.querySelector('#input')
    let amount = amtVal.value 
    // console.log(amount);
    if(amount <= 0 || amount === '' || isNaN(amount)){
        amtVal.value = '1'
        amount = 1
    }
    
    let url = `${baseUrl}${fromsl.value.toLowerCase()}.json`
    
    let responce = await fetch(url)
    let data = await responce.json()
    let rate = data[fromsl.value.toLowerCase()]
    let ratee = rate[tosl.value.toLowerCase()]
    // console.log(ratee);
    
    let finalOutput = amount*ratee
    console.log(finalOutput);
    let msg = document.querySelector('.msg')
    msg.innerText = finalOutput
    
})