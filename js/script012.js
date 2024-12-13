alert("Programa calculo de area geometrica plana: ")
let opcao = (prompt("Digite o numero da figura geometrica: \n 1. triângulo \n 2.Quadrado \n 2. circúlo \n 3.Retangulo" \n circulo))

if (opcao ==1){

let base = parseFloat(prompt("Digite o numero da base: "))
let altura = parseFloat(prompt("Digite o numero da altura: "))

let area= base * altura/2

alert("O resultado é "+ area)
} else 
if (opcao ==2){

    let lado = parseFloat(prompt("Digite o numero do lado: "))
    
    let area= lado * lado
    
    alert("O resultado é "+ area)
} else if(opcao == 3){
    
let base = parseFloat(prompt("Digite o numero da base: "))
let altura = parseFloat(prompt("Digite o numero da altura: "))

let area= base * altura

alert("O resultado é "+ area)
}else if (opcao == 4) {

let raio = parseFloat(prompt("Digite o valor do raio: "))
let area= 3.14 * raio * raio

alert("O resultado é "+ area)

} else{
    alert("Não possui esse numero correspondente")
}