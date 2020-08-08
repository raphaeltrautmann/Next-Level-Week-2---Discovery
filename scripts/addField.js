// Procurar o botão
document.querySelector('#add-time')
.addEventListener('click', cloneField)
//Quando clicar no botão

//Executar uma ação
function cloneField() {
  console.log("Cheguei aqui")
  //Duplicar os campos
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //Boolean: true or false
  
  //Pegar os campos
  const fields = newFieldContainer.querySelectorAll('input')
  
  //Para cada campo
  fields.forEach(function() {
    fields.value = ""
  })
  
  //Colocar na pagina
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}