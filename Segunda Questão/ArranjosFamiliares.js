//Expressão Regular para a letra A
const letraA = /^(?=[HhMm]+)((HM)|(MH))(mm+|h+|hhm+)(h|m)*$/

//Expressão Regular para a letra B
const letraB = /^(?=[HhMm]+)((HM)|(MH))(?:h*([m]h*[m]h*?)*[m]h*?)$/

//Expressão Regular para a letra C
const letraC = /^(?=[HhMm]+)((HM)|(MH))m(h|m)*h$/

//Expressão Regular para a letra D
const letraD = /^(?=[HhMm]+)((HH)|(MM))(hm|mh)(m|h)+(m|h)+(hm|mh)/

//Expressão Regular para a letra E
const letraE = /^(?=[HhMm]+)((HH)|(MM))((hm)*h?|(mh)*m?)$/

//Expressão Regular para a letra F
const letraF = /^(?=[HhMm]+)(?!.*hh)((HH)|(MM))(m|h(mh)*)*$/

//Expressão Regular para a letra G
const letraG = new RegExp(`^(?=[HhMm]+)[HM]{${x},${y}}((h|m)*mmm)?$`);

//Exemplos de Cadeias
const testeLetraA = ['HMmm', 'MHmm', 'HMh', 'MHh', 'HMhh', 'HMhhm', 'MHhmh', 'HMhhmm', 'HMmmmmh', 'MHhhmmmmmm', 'HMhhmmmm', 'MHhm', 'MHhhmhh', 'HMmmh', 'HMhhhmhmm',
                    'HHmm', 'MMmm','Hmm', 'Mhm', 'HMm', 'H', 'M', 'HmM', 'HhMm', 'Mhh', 'HhhhhM', 'Hhmmmmh', 'Mhhmmmm', 'MhhMh', 'HmMhm'];

const testeLetraB = ['HMmmm', 'MHmmm', 'HMm', 'HMhhhhmmmmm', 'MHmhmm', 'HMhhmmm', 'MHhm', 'HMhmhmmh', 'MHmhhhhhhh', 'HMhmhmhmh', 'HMmh', 'HMhhhhm', 'MHhhhmhhh', 'HMmmhmmm', 'MHmhh',
                    'HMmm', 'HMhmm', 'HMhmhmmhm', 'HHmmm', 'MMmmm', 'HMhmhm', 'MHhhmm', 'HMmmmmh', 'Hm', 'Mm', 'HMmmmHmm', 'MHHmmm','HMmmh', 'H', 'M'];

const testeLetraC = ['HMmh', 'HMmhmhmhmhmhmh', 'MHmmmmmhhhhhhh',  'HMmmmmmmh', 'HMmmmmhmmmmmh', 'HMmmhh','HMmhhh', 'MHmmhmhmhh', 'HMmhmh', 'HMmmhmmh',
                    'HMmm', 'HMhm', 'HMhh', 'HHmh', 'MMmh', 'HMhmhmhm', 'HMhmmh', 'HMhmmmhhhm', 'HMhhhhmmmm', 'MH', 'HM'];

const testeLetraD = ['HHmhhmhm', 'MMhmmhhm', 'MMhmmmmmmmmmmmmmh', 'HHmhhhhhhhmmmmmmhhhhhm', 'MMhmhmhm', 'HHmhmhmh', 'MMmhhmmh', 'HHmhhhmmh', 'MMhmmmhm', 'HHmhmmhm',
                    'HMmhhmhm', 'HHmh', 'MMmhmh', 'HHhmhmhh', 'MMmhhmmm', 'HHmmhmhm', 'MMhmmhHm', 'HHmhm', 'MMhmhmm', 'HHmhmhh'];
                    
const testeLetraE = ['HHm', 'MMm', 'HHh', 'MMh', 'HHhm', 'HHmh','HHhmhmhmh', 'MMhmhmhmhm', 'MMmhmhmhmhm', 'HHmhm', 'MMhmh',
                    'HMmh', 'MHmh', 'HHhmhmhmhh', 'HHhmhmhmmhmhm', 'HHmhhm', 'MMhmhmm', 'MMhh', 'HHmm', 'MMhmmh', 'HHmhmhh'];
                    
const testeLetraF = ['HHhm', 'HH', 'MM', 'HHm', 'HHh', 'MMh', 'HHhmhmmhmmh', 'MMmhmmmh', 'HHmmhmm', 'MMmhmmm', 
                    'MMmhmhmmmmhh', 'HMh', 'HHhh', 'MMhh', 'HHmhmhh', 'MMhmmhhmh', 'HHmmmhh', 'MMmhh', 'HHmhh', 'MMhhm'];


//Processo de Testes
switch((process.argv[2]).toUpperCase()){
    case 'A':
        console.log('Verificação da Letra A:');
        for (const teste of testeLetraA) {
            console.log(teste, letraA.test(teste));
        }
        break
    case 'B':
        console.log('\nVerificação da Letra B:');
        for (const teste of testeLetraB) {
            console.log(teste, letraB.test(teste));
        }
        break
    case 'C':
        console.log('\nVerificação da Letra C:');
        for (const teste of testeLetraC) {
            console.log(teste, letraC.test(teste));
        }
        break
    case 'D':
        console.log('\nVerificação da Letra D:');
        for (const teste of testeLetraD) {
            console.log(teste, letraD.test(teste));
        }
        break
    case 'E':
        console.log('\nVerificação da Letra E:');
        for (const teste of testeLetraE) {
            console.log(teste, letraE.test(teste));
        }
        break
    case 'F':
        console.log('\nVerificação da Letra F:');
        for (const teste of testeLetraF) {
            console.log(teste, letraF.test(teste));
        }
        break
    case 'G':
        x = Number(process.argv[3])
        y = Number(process.argv[4])
        
        const letraG = new RegExp(`^(?=[HhMm]+)[HM]{${x},${y}}((h|m)*mmm)?$`);

        const testeLetraG = ['HHhhmmmm', 'HHMhmmm', 'HHMMmmm', 'HMMMMhhhmmm', 'HHHHMMhmmm', 'HHHMMMHhmhmmm', 
                            'HHMMMMMMmhmmm', 'MHMHMHMHMhmmm', 'HHMMHHMMHHhhmmm' ];
        
        console.log('\nVerificação da Letra G:');
        for (const teste of testeLetraG) {
            console.log(teste, letraG.test(teste));
        }
        break
    default:
        console.log("Digite uma letra de A-G")
}