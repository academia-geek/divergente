const facciones = [];

let registrarFaccion = (e) => {
	var valor = document.getElementById("txt_faccion").value; 
    if(valor.trim() != "" && valor.trim() != null && valor.length == 1){
        if(facciones.length < 20){
            facciones.push(valor.toLocaleUpperCase());
            document.getElementById("txt_faccion").value = "";
            alert("Facción registrada.");
        }else{
            alert("Ya se registro el total de personas");
        }
    }else{
        alert("Debe ingresar un valor de facción valido");
    }
}

let calcularTotalFacciones = (e) => {
    
}

document.getElementById('btn_enviar_faccion').addEventListener('click', registrarFaccion);
document.getElementById('calcular_total_facciones').addEventListener('click', calcularTotalFacciones)

let sumar_numeros = (n1, n2) => { 
   let resultado_texto =  `<b>La suma de los dos numeros es:  ${n1 + n2}</b>`;
   document.querySelector("#resultado_suma").innerHTML = resultado_texto;
}



