// El código va aquí -> git status
let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let txtNombre = document.getElementById("Name");
let txtNumber = document.getElementById("Number");

let alertaValidaciones = document.getElementById("alertaValidaciones");
let alertaValidacionesTexto = document.getElementById("alertaValidacionesTexto");

function validarCantidad(){
    if(txtNumber.value.length==0){
        return false;
    } //if length
    return true;
}

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    
    alertaValidacionesTexto.innerHTML="";
    alertaValidaciones.style.display="none";
    txtNombre.style.border="";
    txtNumber.style.border="";

    if (txtNombre.value.length<3){
        alertaValidacionesTexto.innerHTML="El <strong>Nombre</strong> no es correcto";
        alertaValidaciones.style.display="block";
        txtNombre.style.border= "solid red medium";
    } //length>3

    if (! validarCantidad()){
        alertaValidacionesTexto.innerHTML+="El <strong>Numero</strong> no es correcto";
        alertaValidaciones.style.display="block";
        txtNumber.style.border= "solid red medium";
    }

    
    
})

btnClear.addEventListener("click", function(event){
    event.preventDefault();
    
    txtNombre.value = "";
    txtNumber.value = "";
})