function calculator(){
    const OPERATION = Number(prompt('Escolha uma operação: \n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão real\n5 - Divisão inteira\n6 - potenciação'));

    if(!OPERATION || OPERATION < 1 || OPERATION > 6){
        alert(`Erro, opção inválida!`);
        calculator();
    }else{
        let first_number = Number(prompt('Insira o primeiro valor: '));
        let secound_number = Number(prompt('Insira o segundo valor: '));
        let result, option;

        if(!first_number || !secound_number){
            alert(`Erro, opção inválida!`);
            calculator();
        }else{
            function sum(){
                result = first_number + secound_number;
                alert(`${first_number} + ${secound_number} = ${result}`);
            }
        
            function sub() {
                result = first_number - secound_number;
                alert(`${first_number} - ${secound_number} = ${result}`);
            }
        
            function multiply(){
                result = first_number * secound_number;
                alert(`${first_number} * ${secound_number} = ${result}`);
            }
        
            function real_div(){
                result = first_number % secound_number;
                alert(`O resto de ${first_number} dividido por ${secound_number} é ${result}`);
            }
        
            function div(){
                result = first_number / secound_number;
                alert(`${first_number} / ${secound_number} = ${result}`);
            }
        
            function pot(){
                result = first_number ** secound_number;
                alert(`${first_number} elevado a ${secound_number} = ${result}`);
            }
        
            function new_operation(){
                option = prompt('Deseja fazer outra operação?\n1 - Sim, desejo\n2 - Não, encerrar.');
                if(option == 1){
                    calculator();
                }else if(option == 2){
                    alert(`Até mais!`);
                }else{
                    alert(`Opção inválida, tente novamente!`);
                    new_operation();
                }
            }
        
            switch(OPERATION){
                case 1:
                    sum();
                    break;
                case 2:
                    sub();
                    break;
                case 3:
                    multiply();
                    break;
                case 4:
                    real_div();
                    break;
                case 5:
                    div();
                    break;
                case 6:
                    pot();
                    break;
            }
            new_operation();
        }
    }
}

calculator();