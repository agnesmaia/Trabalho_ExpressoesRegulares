const letraA = /^(?=[HhMm]+)((HM)|(MH))(mm+|h+|hhm+)(h|m)*$/

const letraB = /^(?=[HhMm]+)((HM)|(MH))(m(mm)* h*)+$/

const letraC = /^(?=[HhMm]+)/

const letraD = /^(?=[HhMm]+)/

const letraE = /^(?=[HhMm]+)/

const letraF = /^(?=[HhMm]+)/

const letraG = /^(?=[HhMm]+)/



const testeLetraA = ['HMmm', 'MHmm', 'MMmm', 'HHmm', 'HMh', 'HMhh', 'HMhhm', 'MHhmh', 'Hmm', 'Mhm', 'HMm'];
const testeLetraB = ['HMmmm', 'MHmmm', 'HMm', 'HMhhhhmmmmm', 'MHmhmm', 'HMhhmmm'];

console.log('Verificação da Letra A:');
for (const teste of testeLetraA) {
    console.log(teste, letraA.test(teste));
}

console.log('\nVerificação da Letra B:');
for (const teste of testeLetraB) {
    console.log(teste, letraB.test(teste));
}