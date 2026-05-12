function analisar() {
    // Pega o valor selecionado no menu suspenso
    const situacao = document.getElementById("situacao").value;
    const campoResultado = document.getElementById("resultado");
    
    let mensagem = "";

    if (situacao === "bullying") {
        mensagem = "ALERTA: Isso configura Intimidação Sistemática (Cyberbullying). Art. 146-A do Código Penal. Pena: Reclusão e multa.";
    } else if (situacao === "ofensa") {
        mensagem = "ALERTA: Isso pode ser Difamação ou Injúria (Arts. 139-140 do CP). Cabe processo por danos morais conforme Art. 186 do Código Civil.";
    }

    campoResultado.innerText = mensagem;
}
