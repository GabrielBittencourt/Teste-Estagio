//criação das variáveis
let a = "abc";
let b = "abcd";

//compara as duas string e retorna a maior
function compara(a,b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}

//função que chama a função de comparação utilizando duas strings
function aplica_funcao(compara, a, b){
    compara(a,b);
}

//imprime o resultado
console.log(aplica_funcao(compara, a, b));
