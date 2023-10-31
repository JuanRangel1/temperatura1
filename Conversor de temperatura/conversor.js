document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

function tempConvert(){
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

    if(isNaN(fahrenheit) || isNaN(celsius)){
        alert("Digite um valor válido!");
        return
    }else if(fahrenheit === ''){
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    } else if(celsius === ''){
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    }

    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById("celsius").value = parseFloat(celsius).toFixed(1);
}

function CelsiuToFa(){
   
    const celsiu = document.querySelector("[data-celsiu]").value
    const conversao = (celsiu * 1.8 + 32.).toFixed(2)
    var html = document.querySelector("[data-3]")
    const htmlFinal = html.innerHTML = `${celsiu} C  = ${conversao} F`
    var img = window.document.getElementById('imagem')

    if(conversao != null && conversao < 62 ){
    img.src = 'img/imagem_frio.png'
    document.body.style.background = 'rgb(181, 232, 248)'
   

} else if(conversao >= 62 && conversao <= 77){
    img.src = 'img/imagem_fresco.png'
    document.body.style.background = 'rgb(0, 189, 247)'

   
 

} else{
    img.src = 'img/imagem_sol.png'
    document.body.style.background = 'rgb(233, 163, 58)'

}
}




