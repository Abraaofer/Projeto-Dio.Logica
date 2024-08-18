let nome = "Abraaofer";  // Variavel com nome do heroi
let xp = 0;              // XP inicial do Herói
let nivel;               //Nivel do heroi , Porem ainda nao tem o nivel entao nao incrementa nenhum valor.

while (xp <= 15000) {                        //laço de repetição while mostrando que o xp so vai ate 15 mil
    if (xp < 1000) {                         //se o xp for menor que 1000 dar o nome para a variavel nivel como ferro
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

    console.log(`O Herói de nome ${nome} está no nível ${nivel} com ${xp} XP`);    //comando para imprimir no console
    
    // Incrementa o XP   
    xp += 300;
}
