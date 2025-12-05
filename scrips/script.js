// Espera 2000 milissegundos (2 segundos)
setTimeout(function() {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    // Opcional: Adiciona a classe fade-out para um efeito suave
    splashScreen.classList.add('fade-out');
    document.body.style.backgroundColor = 'black';

    // Espera o fade-out terminar (0.5s) para esconder os elementos completamente
    setTimeout(function() {
        splashScreen.style.display = 'none';
        mainContent.style.display = 'block'; // Mostra o conteúdo principal
        

        // Restaura a rolagem da página
        document.body.style.overflow = 'auto';
    }, 500); // 500ms é a duração da transição CSS
}, 1000);

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
