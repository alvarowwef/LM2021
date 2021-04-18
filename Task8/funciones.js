function mostrartabla() {
    
    var num = document.getElementById("num").value;

    var texto = "";
    for (let i = 0; i <= 10; i++) {
        texto = texto + num + " x " + i + " = " + num*(i) + "<br/>";
        
    }
    document.getElementById("tabla").innerHTML = texto;
}