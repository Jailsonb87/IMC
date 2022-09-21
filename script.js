let peso = document.querySelector("#peso")
let altura = document.querySelector("#altura")
let res= document.querySelector("#res");
let categoria = document.querySelector('#cat')
  
//Verifica se o usuário digitou algum número!!    
function validaNum(p,a){
    if (Number(p) && Number(a)) {
        return true
    }else{
        return false
    }
    
}
function calcular(){
    if(validaNum(peso.value, altura.value)){
        let imc = Number(peso.value) / (Number(altura.value) * Number(altura.value))    
        let resultIMC = imc.toFixed(2)//Formata p/ duas casas decimais do ponto.!      
        res.textContent = `Seu IMC é ${resultIMC}`// Imprime o resultado na tela!    
        if (imc <= 18){
            cat.textContent = "Magro"
           }else if(imc <=25){
            cat.textContent = "Normal Parabéns, você está com o peso normal. Recomendamos que mantenha hábitos saudáveis em seu dia a dia. Especialistas sugerem ingerir de 4 a 5 porções diárias de frutas, verduras e legumes, além da prática de exercícios físicos - pelo menos 150 minutos semanais.5"
           }else if(imc <= 30){
            cat.textContent = "Sobrepeso"
           }else if(imc <= 35){
            cat.textContent = "Obeso 1°"
           }else if(imc <= 40){
            cat.textContent = "Obeso 2°"
           }else if(imc => 40){
            cat.textContent = "Obeso 3°"
        }   
    } else {
       alert('Por favor, preencha todos os campos acima!')
    } 
    // Limpa todos os campos após o resultado!
    peso.value = ''
    peso.focus()
    altura.value = ''
}
