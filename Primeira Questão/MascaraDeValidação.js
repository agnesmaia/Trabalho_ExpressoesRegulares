// Máscara de validação para nome, nome do meio e sobrenome
const nomeRegex = /^[A-Z][a-z]*([ ][A-Z][a-z]*)*([ ][A-Z][a-z]*)+?$/;

// Máscara de validação para e-mail
const emailRegex = /^[a-z]+[a-z0-9._]*@[a-z]+(\.[a-z]+)?(\.br|\.com\.br)$/;

//Máscara de validação para senhas
const senhaRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8}$/;

//Máscara de validação de cpf
const cpfRegex = /^(([0-9]){3}\.){2}([0-9]){3}\-([0-9]){2}$/;

//Máscara de validação de Telefone
const telefoneRegex = /^\(*[0-9]{2}\)*[ ][9][0-9]{4}(-?[0-9]{4})$/;

//Máscara de validação de Data e Horário
const dateHorarioRegex = /^([0-9]{2}[/][0-9]{2}[/][0-9]{4})[ ](([0-1][0-9]|[2][0-4])[:][0-5][0-9][:][0-5][0-9])$/;

//Máscara de validação de Números Reais
const numeroRealRegex = /^([+\-]?[1-9][0-9]*|0)(\.[0-9]+)?$/;

// Testes
const testesNome = ['Ada Lovelace', 'Alan Turing', 'Stephen Cole Kleene', '1Alan', 'Alan', 'A1an', 'A1an Turing', 'Alan turing'];
const testesEmail = ['a@a.br', 'divulga@ufpa.br', 'a@a.com.br', '@', 'a@.br', '@a.br', 'T@teste.br', 'a@A.com.br'];
const testeSenhas = ['518R2r5e', 'F123456A', '1234567T', 'ropsSoq0', 'F1234567A', 'abcdefgH', '1234567HI'];
const testeCpf = ['123.456.789-09', '019.004.692-94', '1', '01900469294', '000.000.000-00', '123.456.789-0', '111.111.11-11']
const testeTelefone = ['(12)', '(91) 99999-9999', '(91) 999999999','91 999999999', '(91) 59999-9999', '99 99999-9999', '(94)95555-5555'];
const testeDataHorario = ['31/08/2019 20:14:55', '99/99/9999 23:59:59', '99/99/9999 3:9:9', '9/9/99 99:99:99', '99/99/999903:09:09', '17/02/2004 25:53:59', '17/02/2004 24:53:59', '17/02/2004 22:61:70', '17/02/2004 13:53:59'];
const testeNumeroReal = ['-25.467', '1', '-1', '+1', '64.2', '1.', '.2', '+64,2'];

console.log('Validação de nomes:');
for (const teste of testesNome) {
    console.log(teste, nomeRegex.test(teste));
}

console.log('\nValidação de e-mails:');
for (const teste of testesEmail) {
    console.log(teste, emailRegex.test(teste));
}

console.log('\nValidação de senhas:');
for (const teste of testeSenhas) {
    console.log(teste, senhaRegex.test(teste));
}

console.log('\nValidação de cpf:');
for (const teste of testeCpf) {
    console.log(teste, cpfRegex.test(teste));
}

console.log('\nValidação de telefone:');
for (const teste of testeTelefone) {
    console.log(teste, telefoneRegex.test(teste));
}

console.log('\nValidação de Data e Horario:');
for (const teste of testeDataHorario) {
    console.log(teste, dateHorarioRegex.test(teste));
}

console.log('\nValidação de Número Real:');
for (const teste of testeNumeroReal) {
    console.log(teste, numeroRealRegex.test(teste));
}
