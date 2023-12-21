
const output = document.getElementById("output");
const input = document.getElementById("input");
const from = document.getElementById("from");
const to = document.getElementById("to");
const menssagem = document.getElementById("menssagem");


function convert(){


    if(from.value === to.value){
        output.value = input.value;
        menssagem.innerHTML = "";
    }
    else{

        let meter;
        // o valor do input na unidade de entrada selecionada, é convertida em metros!
        switch(from.value){
            case "km":
                meter = input.value*1000;
                break;
            case "cm":
                meter = input.value/100;
                break;
            case "mm":
                meter = input.value/1000;
                break;
            case "m":
                meter = input.value;
                break;
        }
        // converter o valor convertido em metros para unidade de medida de saída!
        switch(to.value){
            case "km":
                result = meter/1000;
                break;
            case "cm":
                result = meter*100;
                break;
            case "mm":
                result = meter*1000;
                break;
            case "m":
                result = meter;
                break;
        }
        output.value = result;
        menssagem.innerHTML = `${input.value} ${from.value} equivale(m) a ${output.value} ${to.value}`;
    }
    
    // validação para impedir números negativos ou igual a zero
    
    if(input.value < 1){
        output.value = "Erro"
        menssagem.innerHTML = "Digite um valor válido";
    }
    return;
}