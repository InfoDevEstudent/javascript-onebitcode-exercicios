/* function previewCod (){
    const wellcomeCad = alert(`
    \n Teste de Velocidade!
    \n Informe o nome de cada Carro:
    \n Informe a velocidade de cada Carro, em Km/h:`);

    const nomeVeiculo1 = prompt('Digite o nome do Carro1: ');
    const veloVeiculo1 = prompt('Digite a velocidade do Carro1: ');
    const nomeVeiculo2 = prompt('Digite o nome do Carro2: ');
    const veloVeiculo2 = prompt('Digite a velocidade do Carro2: ');

    if(veloVeiculo1 > veloVeiculo2){
        alert(`
        \n Carro1: ${nomeVeiculo1}, valocidade: ${veloVeiculo1} Km/h
        \n Carro2: ${nomeVeiculo2}, valocidade: ${veloVeiculo2} Km/h
        \n Carro: ${nomeVeiculo1} é MAIS RÁPIDO!`);
    }else if(veloVeiculo1 < veloVeiculo2){
        alert(`
        \n Carro1: ${nomeVeiculo1}, valocidade: ${veloVeiculo1} Km/h
        \n Carro2: ${nomeVeiculo2}, valocidade: ${veloVeiculo2} Km/h
        \n Carro: ${nomeVeiculo2} é MAIS RÁPIDO!`);
    }else{
        alert(`
        \n Carro1: ${nomeVeiculo1}, valocidade: ${veloVeiculo1} Km/h
        \n Carro2: ${nomeVeiculo2}, valocidade: ${veloVeiculo2} Km/h
        \n Todos os Carros tem a mesma velocidade: ${veloVeiculo1} Km/h`);
    }
} */

function calcDano() {
    let personagemA = prompt('Digite o nome do PersonagemA: ');
    let poderAtckPersonagemA = parseFloat(prompt('Informe o Poder de Atack: '));
    console.log(`
    \n Nome do PersonagemA: ${personagemA}
    \n Poder de Attack: ${poderAtckPersonagemA}`);

    let personagemB = prompt('Digite o nome do PersonagemB: ');
    let poderLifePersonagemB = parseFloat(prompt('Informe o Poder de Vida: '));
    let poderDefPersonagemB = parseFloat(prompt('Informe o Poder de Defesa: '));
    let escudoProtect = parseFloat(prompt('Escudo de Proteção: SIM 1 - NÃO 0'));
    console.log(`
    \n Nome do PersonagemB: ${personagemB}
    \n Ponto de Vida: ${poderLifePersonagemB}
    \n Ponto de Defesa: ${poderDefPersonagemB}
    \n Escudo de Proteção: ${escudoProtect}`);

    let dano = 0;
    if (poderAtckPersonagemA > poderDefPersonagemB) {
        if (escudoProtect === 0) {
            dano = poderAtckPersonagemA - poderDefPersonagemB;
        } else if (escudoProtect === 1) {
            dano = (poderAtckPersonagemA - poderDefPersonagemB) / 2;
        }
    } else if (poderDefPersonagemB >= poderAtckPersonagemA) {
        dano = 0;
    }
    
    alert(`Dano Causado: ${dano}`);
};