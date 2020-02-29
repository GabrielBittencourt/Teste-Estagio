//string criada
let string = "teste 1 de 2 string 3 ";

//troca todos os valores da string que não estejam no intervalo a-z ou A-Z por [removido]
string = string.replace(/[^a-z][^A-Z][" "]/g, "[removido]");

//imprime o resultado
console.log(string);
