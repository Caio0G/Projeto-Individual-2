var encode = document.querySelector('#encode'); 
var output = document.querySelector('textarea');
var addcampo = document.querySelector('#Cifraescondido')
var escolha = document.querySelector("#opcoes")

encode.addEventListener('click', () =>{
    output.value = btoa(output.value) ;
});

decode.addEventListener('click', () =>{
    output.value = atob(output.value) ;
});
