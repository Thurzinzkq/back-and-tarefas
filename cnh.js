const idade = 16;
const maiorIdade = idade >= 18;
const possuiCNH = false;

const podeDirigir = maiorIdade && possuiCNH;
console.log('Pode viajar sozinho?', podeDirigir);

const podeViajarSozinho = maiorIdade || possuiCNH;
console.log('Pode viajar sozinho?', podeViajarSozinho);

const precisaDeAcompanhante = !maiorIdade;
console.log('Precisa de acompanhante?', precisaDeAcompanhante);