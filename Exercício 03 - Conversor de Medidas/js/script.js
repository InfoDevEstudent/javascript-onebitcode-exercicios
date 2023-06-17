function conversorDeMedidas (){
    let valor = +prompt('Informe o valor, em metro(s) a ser convertido: ');
    alert(`Valor informado: ${valor} metro(s).`);

    let medidas = +prompt(`
    Escolha a medida, que deseja converter: 
    \n 1 - milimetro (mm)
    \n 2 - centimetro (cm)
    \n 3 - decimetro (dm)
    \n 4 - decâmetro (dam)
    \n 5 - hectômetro (hm)
    \n 6 - quilômetro (km)
    `);

    switch (medidas) {
        case 1:
            alert(`Medida escolhida: milimetro (mm)`);
            alert(`${valor} metro(s), convertido(s) em milimetro(s) = ${valor / 0.0010000} mm.`);
            break;
        case 2:
            alert(`Medida escolhida: centimetro (cm)`);
            alert(`${valor} metro(s), convertido(s) em centimetro(s) = ${valor / 0.010000} cm.`);
            break;
        case 3:
            alert(`Medida escolhida: decimetro (dm)`);
            alert(`${valor} metro(s), convertido(s) em decimetro(s) = ${valor / 0.10000} dm.`);
            break;
        case 4:
            alert(`Medida escolhida: decâmetro (dam)`);
            alert(`${valor} metro(s), convertido(s) em decâmetro(s) = ${valor * 0.1} dam.`);
            break;
        case 5:
            alert(`Medida escolhida: hectômetro (hm)`);
            alert(`${valor} metro(s), convertido(s) em hectômetro(s) = ${valor * 0.01} hm.`);
            break;
        case 6:
            alert(`Medida escolhida: quilômetro (km)`);
            alert(`${valor} metro(s), convertido(s) em quilômetro(s) = ${valor * 0.001} km.`);
            break;
        default:
            alert(`Medida escolhida: Opção Inválida`);
            break;
    }
};