class Relogio {

    colocarNaTela() {
        const data = new Date();
        this.formatarData(data);
        this.formatarHora(data);

    }

    formatarData(data) {
        const dataExata = data.toLocaleDateString('pt-br', {dateStyle: 'full'});
        
        const dataPlace = document.querySelector('.data-container');
        const p = document.createElement('p');
        p.innerHTML = dataExata;
        dataPlace.appendChild(p);
        p.classList.add('dataAtual');
    }
    
    formatarHora(hora) {
        const horaExata = hora.toLocaleTimeString('pt-br',{timeStyle: 'medium'});
 
        const relogioPlace = document.querySelector('.relogio-container');
        const p = document.createElement('p');
        p.innerHTML = horaExata;
        relogioPlace.appendChild(p);
        p.classList.add('horaAtual');
        // setInterval(()=> {
        //     hora.getSeconds()
            
            
        // }, 1000)
        
        
    }
    
    
    relogioOn() {
        this.colocarNaTela();

    }

}

const relogio = new Relogio();
relogio.relogioOn();


