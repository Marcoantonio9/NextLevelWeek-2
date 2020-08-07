// Procurar o botão 
document.querySelector('#add-time')
//Quando clicar no botão 
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField(){
    //Duplicar os campos. Que campo?
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true) //Boolean 

    //Pegar os campos. 
    const fields = newFieldsContainer.querySelectorAll('input')

    //Para cada campo, limpar
    fields.forEach(function(field){
        //Pegar o field do moomento
        field.value = ""
    })

    //Colocar na pagina. Onde?
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}

