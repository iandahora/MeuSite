var nome = null
var idade = null

alert("Insira seu nome e sua idade")
nome = prompt("Nome:")
idade = prompt("Idade:")

if(idade < 18 && idade != null)
alert("Olá, " + nome + "! Vi que voce é menor de idade")

if(idade > 18 && idade != null)
alert("Olá, " + nome + "! Vi que voce é maior de idade")

else if(idade === null){
alert("Tente novamente, digitando corretamente!")
nome = prompt("Nome:")
idade = prompt("Idade:")    
}


