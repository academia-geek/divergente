const facciones = [];

let registrarFaccion = (e) => {
	var valor = document.getElementById("txt_faccion").value; 
    if(valor.trim() != "" && valor.trim() != null){
        
        
    }else{
        alert("Debe ingresar un valor de facción");
    }
}

document.getElementById('btn_enviar_faccion').addEventListener('click', registrarFaccion);


let sumar_numeros = (n1, n2) => { 
   let resultado_texto =  `<b>La suma de los dos numeros es:  ${n1 + n2}</b>`;
   document.querySelector("#resultado_suma").innerHTML = resultado_texto;
}



