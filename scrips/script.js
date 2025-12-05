function atualizarRelogio() {
    const relogioElemento = document.getElementById('relogio'); // Seleciona a div do relógio
    const agora = new Date(); // Pega a data e hora atual

    let horas = agora.getHours();
    let minutos = agora.getMinutes();

    // Adiciona zero à esquerda se for menor que 10 (ex: 09:05)
    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;

    // Monta a string no formato HH:MM
    relogioElemento.innerText = `${horas}:${minutos}`;
}

// Chama a função para iniciar o relógio
atualizarRelogio();

// Atualiza o relógio a cada 1000 milissegundos (1 segundo)
setInterval(atualizarRelogio, 1000);