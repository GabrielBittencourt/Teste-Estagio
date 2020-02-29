//criação das variáveis
let a = "abc";
let b = "abcd";

//compara duas strings e retorna a maior
function compara(a,b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}

//imprime a maior
console.log(compara(a,b));
