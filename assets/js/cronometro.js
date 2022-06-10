class Cronometro {
    controle() {
        let segundos = 0;
        let timer;
        const cronometroLocal = document.querySelector('.cronometro-display');
        cronometroLocal.innerHTML = '00:00:00';

        function criarDisplay(segundos) {

            let tempo = new Date(segundos * 1000);
            const cronometro = tempo.toLocaleTimeString('pt-BR', {
                timeStyle: 'medium',
                timeZone: 'UTC',
                hour12: false
            })
            return cronometro;
        }

        function iniciar() {
            timer = setInterval(function () {
                segundos++
                cronometroLocal.innerHTML = criarDisplay(segundos);
            }, 1000)
        }

        document.addEventListener('click', (e) => {
            const element = e.target;

            if (element.classList.contains('btn-reiniciar')) {
                clearInterval(timer);
                cronometroLocal.innerHTML = '00:00:00';
                segundos = 0;
                cronometroLocal.classList.remove('blink')
        
            }

            if (element.classList.contains('btn-pausar')) {
                clearInterval(timer);
                cronometroLocal.classList.add('blink')
                
            }

            if (element.classList.contains('btn-iniciar')) {
                clearInterval(timer);
                iniciar();
                cronometroLocal.classList.remove('blink')
            }

        })

    }

}

const cronometro = new Cronometro();
cronometro.controle();