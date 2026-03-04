function gerarTicket() {

    const nomeRaw = document.getElementById("input-nome").value.trim();
    const urgencia = document.getElementById("urgencia").value;

    if (nomeRaw.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return;
    }

    const partesNome = nomeRaw.split(" ").filter(parte => parte !== "");

    if (partesNome.length < 2) {
        alert("Digite nome e sobrenome.");
        return;
    }

    if (urgencia === "") {
        alert("Selecione o nível de urgência.");
        return;
    }

    const primeiroNome = partesNome[0];
    const ultimoNome = partesNome[partesNome.length - 1];
    const nomeFinal = (primeiroNome + " " + ultimoNome).toUpperCase();

    const prazos = {
        alta: 2,
        media: 7,
        baixa: 10
    };

    const diasPrazo = prazos[urgencia];

    const dataAtual = new Date();
    const dataPrazo = new Date();
    dataPrazo.setDate(dataAtual.getDate() + diasPrazo);

    document.getElementById("out-nome").textContent = nomeFinal;
    document.getElementById("out-data").textContent = dataAtual.toLocaleDateString("pt-BR");
    document.getElementById("out-prazo").textContent = dataPrazo.toLocaleDateString("pt-BR");

    document.getElementById("ticket-resultado").style.display = "block";
}