let nome = "Abraaofer";  // Nome do Herói
let xp = 7300;           // XP do Herói
                                 
let nivel;     //Nivel do heroi , Porem ainda nao tem o nivel entao nao incrementa nenhum valor.

if (xp < 1000) {                     //nao tem laço de repetição pq o xp é fixo 
    nivel = "Ferro"; 
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else if (xp >= 10001) {
    nivel = "Radiante";
}

console.log(`O Herói de nome ${nome} está no nível ${nivel}`);  //imprimir no console o resultado 




//maior diferença dos dois é que um tem o xp fixo e outro tem um xp que vai incrementando com o tempo enquanto ele sobe 

