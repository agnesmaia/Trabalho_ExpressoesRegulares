const letraA = /^(?=[HhMm]+)((HM)|(MH))(mm+|h+|hhm+)(h|m)*$/

const letraB = /^(?=[HhMm]+)((HM)|(MH))(h|m)*m(h|m)*(m(h|m))*$/

const letraC = /^(?=[HhMm]+)((HM)|(MH))m(h|m)*h$/

const letraD = /^(?=[HhMm]+)((HH)|(MM))(hm|mh)(m|h)+(m|h)+(hm|mh)/

const letraE = /^(?=[HhMm]+)((HH)|(MM))((hm)*h?|(mh)*m?)$/

const letraF = /^(?=[HhMm]+)/

const letraG = /^(?=[HhMm]+)/



const testeLetraA = ['HMmm', 'MHmm', 'MMmm', 'HHmm', 'HMh', 'HMhh', 'HMhhm', 'MHhmh', 'Hmm', 'Mhm', 'HMm'];
const testeLetraB = ['HMmmm', 'MHmmm', 'HMm', 'HMhhhhmmmmm', 'MHmhmm', 'HMhhmmm', 'HMmm'];
const testeLetraC = ['HMmh', 'HMmm', 'HMhm', 'HMmhmhmhmhmhmh', 'MHmmmmmhhhhhhh', 'HM'];
const testeLetraD = ['HHmhhmhm', 'MMhmmhhm', 'HMmhhmhm', 'HHmh', 'MMhmmmmmmmmmmmmmh', 'HHmhhhhhhhmmmmmmhhhhhm'];
const testeLetraE = ['HHm', 'MMm', 'HHh', 'MMh','HHhmhmhmhmhmh', 'MMhmhmhmhmhmhm', 'MMmhmhmhmhm', 'HHhmhmhmhmhmh', 'HHhmhmhmmhmhm'];



console.log('Verificação da Letra A:');
for (const teste of testeLetraA) {
    console.log(teste, letraA.test(teste));
}

console.log('\nVerificação da Letra B:');
for (const teste of testeLetraB) {
    console.log(teste, letraB.test(teste));
}

console.log('\nVerificação da Letra C:');
for (const teste of testeLetraC) {
    console.log(teste, letraC.test(teste));
}

console.log('\nVerificação da Letra D:');
for (const teste of testeLetraD) {
    console.log(teste, letraD.test(teste));
}

console.log('\nVerificação da Letra E:');
for (const teste of testeLetraE) {
    console.log(teste, letraE.test(teste));
}