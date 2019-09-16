function clicou(){
    document.getElementById("agradecimento").innerHTML =  "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://globallabs.ventures/");
    window.location.href = "https://globallabs.ventures/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("Trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

/*
function soma(n1, n2){
    return n1 + n2;
}
*/

/*
var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade);
console.log(validar);
*/


//alert(soma(5,10));
// var d = new Date();
// alert(d.getDay());
// alert(d.getHours());
// alert(d.getMinutes());

/*
var count ;
for(count = 0; count <= 5; count++ ){
    alert(count);
}

*/
/*
var count = 0;
while(count < 5){
    console.log(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade");
if(idade > 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}

*/

// var frutas = [{nome: "maça", cor: "vermelha"},{nome: "uva", cor:"roxa"}];
// console.log(frutas[1].nome);
// console.log(frutas);


/*
var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);
*/

//var lista = ["maça","pera", "laranja"];
//lista.push("uva"); Inserir novo elemento
//lista.pop() //Remove o último elemento do Array
//console.log(lista);
//alert(lista[1]);
//console.log(lista.length);
//console.log(lista.toString());
//console.log(lista.join(' - '))


// var nome = "Rafael galleani";
// var n1 = 5;
// var n2 = 3;
// var frase = "Japão é o melhor time do mundo";
// //alert( nome + " tem " + idade + " anos");
// //alert(idade + idade2)
// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.toLowerCase());
// //alert(frase.replace("Japão","Brasil"))