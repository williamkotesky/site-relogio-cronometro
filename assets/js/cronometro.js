class Cronometro {

    controle() {
        const cronometro = this.criarDisplay();
        this.colocarNaTela(cronometro);

        document.addEventListener('click', function(e) {
            const element = e.target;
            if(element.classList.contains('iniciar')) {
                iniciar()
            }
        })
    }

    criarDisplay() {
        const tempo = new Date(0);
        const cronometro = tempo.toLocaleTimeString('pt-br', {
            timeStyle: 'medium', 
            timeZone: 'UTC',
            hours12: false
        })
        return cronometro;
    }

    colocarNaTela(cronometro) {
        const cronometroPlace = document.querySelector('.cronometro-container');
        const p = document.createElement('p');
        p.innerHTML = cronometro;
        cronometroPlace.appendChild(p);
        p.classList.add('cronometro-display');

    }

    iniciar() {
        
    }



}

const cronometro = new Cronometro();
cronometro.controle();