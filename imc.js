function calcular(){
var altura = parseFloat(document.getElementById('altura').value)
var peso = parseInt(document.getElementById('peso').value)

imc = peso / (altura * altura);
imc = parseInt(imc)
alert ('IMC: '+imc) 
}
   


