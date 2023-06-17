"use strict";
function previewCad() {
    const wellcomeCad = alert(`
      \n Cadastro de Recrutas!
      \n Preencha todos os dados de forma correta:`);
    const nome = prompt('Primeiro Nome: ');
    const sobrenome = prompt('Sobrenome: ');
    const estudo = prompt('Campo de Estudo: ');
    const idade = prompt('Informe sua idade: ');
    const anoDeNascimento = 2023 - parseFloat(idade);
    alert(`
      \n Dados do Recruta
      \n Primeiro Nome: ${nome}
      \n Sobrenome: ${sobrenome}
      \n Campo de Estudo: ${estudo}
      \n Ano de Nascimento: ${anoDeNascimento}, ${2023 - anoDeNascimento} anos.`);
}
function previewCalc() {
    const wellcomeCalc = alert(`
      \n Calculadora de Operações!
      \n Soma, Subtração, Multiplicação e Divisão`);
    const valor1 = prompt('Digite um número: ');
    const valor2 = prompt('Digite outro número: ');
    const resultados = alert(`
      \n Você digitou os números: ${valor1} e ${valor2}
      \n Resultados das Operações
      \n Soma: ${parseFloat(valor1) + parseFloat(valor2)}
      \n Subtração: ${parseFloat(valor1) - parseFloat(valor2)}
      \n Multiplicação: ${parseFloat(valor1) * parseFloat(valor2)}
      \n Divisão: ${parseFloat(valor1) / parseFloat(valor2)}`);
}
