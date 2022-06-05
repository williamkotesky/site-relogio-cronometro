class Relogio {
    colocarNaTela() {
        const data = new Date();
        this.formatarData(data);
        this.formatarHora();
    }

    formatarData(data) {
        const dataExata = data.toLocaleDateString('pt-br', {dateStyle: 'full'});
        const dataPlace = document.querySelector('.data-container');
        const p = document.createElement('p');
        p.innerHTML = dataExata;
        dataPlace.appendChild(p);
        p.classList.add('dataAtual');
    }
    
    formatarHora() {
        const relogioPlace = document.querySelector('.relogio-container');
        const p = document.createElement('p');
        p.classList.add('horaAtual');
        relogioPlace.appendChild(p);
        
        setInterval(()=> {
            let hora = new Date();
            p.innerHTML= hora.toLocaleTimeString('pt-br',{timeStyle: 'medium'});
            
        }, 1000)
    }        
    
}

const relogio = new Relogio();
relogio.colocarNaTela();


