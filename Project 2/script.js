let form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()

  let height = Number( document.querySelector('#height').value)
  let weight = Number (document.querySelector('#weight').value)
  let results = document.querySelector('#results')

  if(height <= 0 || isNaN(height) || height === ''){
    results.innerText = 'Please enter a valid number.'
  }
  if(weight <= 0 || isNaN(weight) || weight === ''){
    results.innerText = 'Please enter a valid number.'
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    results.innerHTML = `Your BMI is: ${bmi}`
  }
  
})