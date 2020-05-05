const facciones = [];

let registrarFaccion = (e) => {
	var valor = document.getElementById("txt_faccion").value; 
    if(valor.trim() != "" && valor.trim() != null && valor.length == 1){
        if(facciones.length < 20){
            facciones.push(valor.toLocaleUpperCase());
            document.getElementById("txt_faccion").value = "";
            //alert("Facción registrada.");
        }else{
            alert("Ya se registro el total de personas");
        }
    }else{
        alert("Debe ingresar un valor de facción valido");
    }
}

let calcularTotalFacciones = (e) => {
	let Contador_Abnegaciones = 0, Contador_Cordialidad = 0, Contador_Erudicion = 0, Contador_Osadia = 0, Contador_Verdad = 0, Contador_Divergente = 0;
    var HTML_TOTAL = '';
    /*for (let index = 0; index < facciones.length; index++) {
        const element = facciones[index];
        console.log("================");
        console.log(index);
        console.log(element);
        console.log("================");
    }*/
    facciones.forEach((element, index) => {
        //console.log(element);
        if(element == "A"){
           Contador_Abnegaciones = Contador_Abnegaciones+1;
        }else if(element == 'C'){
            Contador_Cordialidad++;
        }else if(element == 'E'){
            Contador_Erudicion++;
        }else if(element == 'O'){
            Contador_Osadia++;
        }else if(element == 'V'){
            Contador_Verdad++;
        }else{
            Contador_Divergente++;
        }
        
    });
    
    HTML_TOTAL = `<table border=1>
                    <tr>
                        <td>Abnegación (A)</td>
                        <td>${Contador_Abnegaciones}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cordialidad (C)</td>
                        <td>${Contador_Cordialidad}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Erudición (E)</td>
                        <td>${Contador_Erudicion}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Osadía (O)</td>
                        <td>${Contador_Osadia}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Verdad (V)</td>
                        <td>${Contador_Verdad}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Divergente</td>
                        <td>${Contador_Divergente}</td>
                        <td></td>
                    </tr>
                </table>`;
        document.getElementById('ctn_totalfacciones').innerHTML = HTML_TOTAL;
    console.log(Contador_Abnegaciones);
    console.log(Contador_Cordialidad);
    console.log(Contador_Erudicion);
    console.log(Contador_Osadia);
    console.log(Contador_Verdad);
    console.log(Contador_Divergente);
}

document.getElementById('btn_enviar_faccion').addEventListener('click', registrarFaccion);
document.getElementById('calcular_total_facciones').addEventListener('click', calcularTotalFacciones)

let sumar_numeros = (n1, n2) => { 
   let resultado_texto =  `<b>La suma de los dos numeros es:  ${n1 + n2}</b>`;
   document.querySelector("#resultado_suma").innerHTML = resultado_texto;
}



