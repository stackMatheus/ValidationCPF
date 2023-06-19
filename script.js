console.log('Javascript carregado.');


// Function of validation cpf.//

function validaCPF(cpf) {
    console.log(cpf.length)
    if (cpf.length != 11){
        return false;

    } else {

        var numeros = cpf.substring(0,9);
        var digitos = cpf.substring(9);

        console.log('O número digitado é', numeros);
        console.log('O digito é', digitos)


        var soma = 0;
        for (var i = 10; i > 0; i--) {
            soma += numeros.charAt(10 - i) * i;
            }
            console.log(soma);

            var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

            //Validation of first type
            if(resultado != digitos.charAt(0)) {
                return false
            }

            soma = 0;
            numeros = cpf.substring(0, 10);

            for(var k = 0; k > 1; k--){
                soma += numeros.charAt(11 - k) * k
            }
            
            resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11);

            if(resultado != digitos.charAt(1)){
            }
                
            
            return true;
        }        
    }


// Function to find the cpf typed. //
function validacao() {
    console.log('Iniciando validação do CPF.');
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none'

    var cpf = document.getElementById('cpf_digitado').value;

    var resultadoValidacao = validaCPF(cpf);

//Function to release the code to see. //

    if (resultadoValidacao == true) {
        document.getElementById('success').style.display = 'block';

        } else {
            document.getElementById('error').style.display = 'block';

        }
    }
