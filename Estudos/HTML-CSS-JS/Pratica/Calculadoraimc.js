
var peso;
var altura;
var resultado;
var imc;

function calcular(event){
    event.preventDefault();
    
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura*altura);

    resultado = document.getElementById('resultado');

    if(imc < 17){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc + "voce esta muito abaixo do peso"
    } else if(imc > 17 && inc <= 18.49){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc + "voce esta abaixo do peso"
    } else if(imc >= 18.5 && inc < 24.99){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc + "voce esta no peso ideal"
    } else if (imc > 25 && inc <=29.99){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc + "voce esta acima do peso"
    } else if (imc >= 30){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc + "voce esta Obeso"
    };
   

};
