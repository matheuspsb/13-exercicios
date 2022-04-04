// Velocidade máxima 70
// a cada 5 km 1 ponto na carteira
// caso maior que 12 pontos -> "Carteira Suspensa"

verificarVelocidade(84);

function verificarVelocidade(velocidade) {
    if(velocidade <= 70)
        console.log("ok");
    else{
        const pontos = Math.floor(((velocidade - 70) / 5));
        if(pontos >= 12)
            console.log("Carteira Suspensa");
        else
            console.log('Pontos:',pontos);
    }
}
