function analisar() {
    const situacao = document.getElementById("situacao").value;
    const campoResultado = document.getElementById("resultado");
    let mensagem = "";

    switch(situacao) {
        case "bullying":
            mensagem = "⚠️ CONFIGURA CYBERBULLYING: Art. 146-A do CP. Crime de intimidação sistemática virtual. Pena: Reclusão de 2 a 4 anos e multa.";
            break;
        case "ofensa":
            mensagem = "⚠️ CRIMES CONTRA A HONRA: Arts. 138-140 do CP (Calúnia, Difamação ou Injúria). Cabe reparação por danos morais (Art. 186 CC).";
            break;
        case "stalking":
            mensagem = "⚠️ CRIME DE PERSEGUIÇÃO: Art. 147-A do CP. Punível com reclusão de 6 meses a 2 anos.";
            break;
        case "fake":
            mensagem = "⚠️ FALSA IDENTIDADE: Art. 307 do CP. Atribuir-se falsa identidade para obter vantagem ou causar dano.";
            break;
        case "vazamento":
            mensagem = "🚨 URGENTE: Art. 218-C do CP. Divulgação de cena de estupro ou de cena de sexo/nudez sem consentimento. Crime grave!";
            break;
        default:
            mensagem = "Por favor, selecione uma opção para ver a análise.";
    }

    campoResultado.innerHTML = `<strong>${mensagem}</strong>`;
}
