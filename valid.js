function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;

    var nomeRegex = /^[a-zA-ZÀ-ú\s']{1,100}$/;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var telefoneRegex = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;

    if (!nomeRegex.test(nome)) {
        alert("insira um nome válido (até 100 caracteres, apenas letras, espaços e apóstrofos).");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("insira um email válido.");
        return false;
    }

    if (!telefoneRegex.test(telefone)) {
        alert("insira um telefone válido ex: (xx) xxxx-xxxx.");
        return false;
    }

    return true;
}