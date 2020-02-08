const codificar = () => {
    var casa = parseInt(document.getElementById('casas').value);
    let campoCodificar = document.getElementById('texto');
    if (!campoCodificar.value == "") {
        document.getElementById('palavraCodificada').innerHTML = criptografar(campoCodificar.value, casa);
    }
}

const descodificar = () => {
    var casa = parseInt(document.getElementById('casas').value);
    let campoDescodificar = document.getElementById('textoDescodificado');
    if (!campoDescodificar.value == "") {
        document.getElementById('palavraDescodificada').innerHTML = descriptografar(campoDescodificar.value, casa);
    }
}

const criptografar = (mensagem, numeroCasas) => {

    let palavraDecodificada = "";
    mensagem = mensagem.toLowerCase();

    for (let msg of mensagem) {

        if (msg.charCodeAt() < 97 || msg.charCodeAt() > 122) {
            palavraDecodificada += msg;
        } else {

            if (msg.charCodeAt() + numeroCasas > 122) {
                palavraDecodificada += String.fromCharCode(msg.charCodeAt() + numeroCasas - 26)
            } else {
                palavraDecodificada += String.fromCharCode(msg.charCodeAt() + numeroCasas)
            }
        }
    }
    return palavraDecodificada
}

const descriptografar = (mensagem, numeroCasas) => {

    let palavraDecodificada = "";
    mensagem = mensagem.toLowerCase();

    for (let msg of mensagem) {

        if (msg.charCodeAt() < 97 || msg.charCodeAt() > 122) {
            palavraDecodificada += msg;
        } else {
            if (msg.charCodeAt() - numeroCasas < 97) {
                palavraDecodificada += String.fromCharCode(msg.charCodeAt() - numeroCasas + 26)
            } else {
                palavraDecodificada += String.fromCharCode(msg.charCodeAt() - numeroCasas)
            }
        }
    }
    return palavraDecodificada
}



