const facciones = [];
var N_faccion = 0;
let registrarFaccion = (e) => {
	var valor = document.getElementById("txt_faccion").value; 
    if(valor.trim() != "" && valor.trim() != null && valor.length == 1){
        if(facciones.length < 20){
            N_faccion++;
            facciones.push(valor.toLocaleUpperCase());
            document.getElementById("txt_faccion").value = "";
            document.getElementById("txt_faccion").focus();
            document.getElementById("N_faccion").innerHTML = N_faccion;
        }else{
            alert("Ya se registro el total de personas");
        }
    }else{
        alert("Debe ingresar un valor de facción valido");
    }
}

let calcularTotalFacciones = (e) => {
	let contadores_facciones = [0,0,0,0,0,0];
    let porcentajes_facciones = [0,0,0,0,0,0];
    var HTML_TOTAL = '';
    let porcentaje_menor = Number.MAX_VALUE;
    let indice_menor_porcentaje = -1;
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
            contadores_facciones[0] = contadores_facciones[0] + 1
        }else if(element == 'C'){
            contadores_facciones[1]++;
        }else if(element == 'E'){
            contadores_facciones[2]++;
        }else if(element == 'O'){
            contadores_facciones[3]++;
        }else if(element == 'V'){
            contadores_facciones[4]++;
        }else{
            contadores_facciones[5]++;
        }
        
    });
    
    porcentajes_facciones = contadores_facciones.map((contador,  index) => {
        let porcentaje = (contador/facciones.length) * 100;
        if(porcentaje < porcentaje_menor){
            indice_menor_porcentaje = index;
            porcentaje_menor = porcentaje;
        }
        return porcentaje;
    });
    
    HTML_TOTAL = `<table border=1>
                    <tr>
                        <td>Abnegación (A)</td>
                        <td>${contadores_facciones[0]}</td>
                        <td>${porcentajes_facciones[0].toFixed(2)}%</td>
                    </tr>
                    <tr>
                        <td>Cordialidad (C)</td>
                        <td>${contadores_facciones[1]}</td>
                        <td>${porcentajes_facciones[1].toFixed(2)}%</td>
                    </tr>
                    <tr>
                        <td>Erudición (E)</td>
                        <td>${contadores_facciones[2]}</td>
                        <td>${porcentajes_facciones[2].toFixed(2)}%</td>
                    </tr>
                    <tr>
                        <td>Osadía (O)</td>
                        <td>${contadores_facciones[3]}</td>
                        <td>${porcentajes_facciones[3].toFixed(2)}%</td>
                    </tr>
                    <tr>
                        <td>Verdad (V)</td>
                        <td>${contadores_facciones[4]}</td>
                        <td>${porcentajes_facciones[4].toFixed(2)}%</td>
                    </tr>
                    <tr>
                        <td>Divergente</td>
                        <td>${contadores_facciones[5]}</td>
                        <td>${porcentajes_facciones[5].toFixed(2)}%</td>
                    </tr>
                </table>`;
        
        document.getElementById('ctn_totalfacciones').innerHTML = HTML_TOTAL;
        /**
         *  Si el porcentaje de miembros de Osadía más el porcentaje de Divergentes supera
            el 40% del total, la aplicación debe decir “Jeanine, puedes proceder con la
            dominación total!”
         */        
        if((porcentajes_facciones[5] + porcentajes_facciones[3]) > 40){
            alert("Jeanine, puedes proceder con la dominación total!");
        }
        
        /**
         *  Si el porcentaje de miembros de Erudición es el menor de todos y no hay
            Divergentes, la aplicación debe decir “Janine, ¡te tocó aplazar tu maléfico plan!”  
         */
        if(indice_menor_porcentaje == 2 && contadores_facciones[5] == 0){
            alert("Janine, ¡te tocó aplazar tu maléfico plan!");
        }
        
}

document.getElementById('btn_enviar_faccion').addEventListener('click', registrarFaccion);
document.getElementById('calcular_total_facciones').addEventListener('click', calcularTotalFacciones);
document.getElementById("txt_faccion").addEventListener('keypress',  (e) => {
    if(e.charCode == 13){
        registrarFaccion(e);
    }
})


