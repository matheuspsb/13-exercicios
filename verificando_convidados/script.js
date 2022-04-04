function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    ConvidadosMatheus = ['Lincoln', 'Danilo', 'Alberto', 'Douglas', 'Anthony', 'Gil']
    if(ConvidadosMatheus.includes(NomeConvidado)) {
        document.getElementById('PermissaoEntrada').innerText = 'Você pode Entrar!'
    } else {
        document.getElementById('PermissaoEntrada').innerText = 'Você não pode Entrar!'
    }
}