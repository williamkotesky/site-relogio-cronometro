class Cronometro {
    constructor () {
        this.segundos =0;
        this.timer;
        this.cronometroLocal = document.querySelector('.cronometro-display');
    }

    controle() {
        
        const cronometro = this.criarDisplay(this.segundos);
        this.cronometroLocal.innerText = cronometro;
        let segundosAtt = this.transporteSegundos();

        document.addEventListener('click', (e) => {
            const element = e.target;
            
            if(element.classList.contains('btn-iniciar')) {
                clearInterval(this.timer);
                
                this.iniciar(this.segundos);
                this.segundos = segundosAtt;
                console.log(this.segundos)
                
            }

            if(element.classList.contains('btn-pausar')) {
                this.pausar();
                
            }
        })
    }

    criarDisplay(segundos) {
        let tempo = new Date(segundos*1000);
        const cronometro = tempo.toLocaleTimeString('pt-br', {
            timeStyle: 'medium', 
            timeZone: 'UTC',
            hours12: false
        })
        return cronometro;
    }

    iniciar(segundos) {
        this.timer = setInterval(() => {
            segundos++
            this.cronometroLocal.innerHTML = this.criarDisplay(segundos);
            this.transporteSegundos(segundos)

        }, 1000)

        
    }

    transporteSegundos(segundos) {segundos}

    pausar() {
        clearInterval(this.timer);
    }


}

const cronometro = new Cronometro();
cronometro.controle();