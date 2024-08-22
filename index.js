function CalcularSaldo() {
    let vitorias = 102;
    let derrotas = 0;
    let saldo = (vitorias - derrotas);
     return saldo;
}
let SaldoDoHeroi = CalcularSaldo();
let nivel;
if (SaldoDoHeroi <10){
   
     nivel = "ferro"
}else if (SaldoDoHeroi >=11 && SaldoDoHeroi <=20) {

    nivel ="bronze";
}else if (SaldoDoHeroi >=21 && SaldoDoHeroi <=50) {

    nivel ="prata";

}else if (SaldoDoHeroi >=51 && SaldoDoHeroi <=80) {

    nivel ="ouro";

}else if (SaldoDoHeroi >=81 && SaldoDoHeroi <=90) {   nivel ="diamante";}
else if (SaldoDoHeroi >=91 && SaldoDoHeroi <=100) {
 nivel ="lendario";

}else if (SaldoDoHeroi >=101) {

    nivel ="imortal";
}  
console.log(`Saldo do heroi é de ${SaldoDoHeroi} e estar no nivel de ${nivel}`)