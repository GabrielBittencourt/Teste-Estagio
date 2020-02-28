var a = "abc";
var b = "abcd";

function compara(a,b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}

function aplica_funcao(compara, a, b){
    compara(a,b);
}

console.log(aplica_funcao(compara, a, b));
