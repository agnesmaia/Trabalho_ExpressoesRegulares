// Máscara de validação para nome, nome do meio e sobrenome
const nomeRegex = /^[A-Z][a-z]*([ ][A-Z][a-z]*)*([ ][A-Z][a-z]*)+?$/;

// Máscara de validação para e-mail
const emailRegex = /^[a-z]+[a-z0-9._]*@[a-z]+(\.[a-z]+)?(\.br|\.com\.br)$/;

//Máscara de validação para senhas
const senhaRegex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8}$/;
// Testes
const testesNome = ['Ada Lovelace', 'Alan Turing', 'Stephen Cole Kleene', '1Alan', 'Alan', 'A1an', 'A1an Turing', 'Alan turing'];
const testesEmail = ['a@a.br', 'divulga@ufpa.br', 'a@a.com.br', '@', 'a@.br', '@a.br', 'T@teste.br', 'a@A.com.br'];
const testeSenhas = ['518R2r5e', 'F123456A', '1234567T', 'ropsSoq0', 'F1234567A', 'abcdefgH', '1234567HI'];

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
