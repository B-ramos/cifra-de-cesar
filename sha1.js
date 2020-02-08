const criptografarSha1 = (msgS) => {
    let crypto = require('crypto');
    let sha = crypto.createHash('sha1').update(msgS).digest('hex');
    return sha;
}

console.log(criptografarSha1("mensagem"));
