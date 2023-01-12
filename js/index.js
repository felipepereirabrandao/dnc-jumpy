var textAlert = document.getElementById('textAlert')
var btnSend = document.getElementById('btnSend')

const input = document.querySelectorAll('input')



btnSend.addEventListener('click', function() {
    input.forEach(element => {
        if(element.value == ""){
            textAlertErro()
            return
        }else {
            textAlertSucesso(element)
              
            
        }
    });
    
})

function textAlertSucesso() {
    textAlert.style.color = "#0F7B0F"
    textAlert.innerText ="Sucesso!"
    textAlert.classList.remove('hidden')
    
    
}
function textAlertErro() {
    textAlert.style.color = "#E73550"
    textAlert.innerText ="Campos obrigatórios não registrados."
    textAlert.classList.remove('hidden')
    
}






