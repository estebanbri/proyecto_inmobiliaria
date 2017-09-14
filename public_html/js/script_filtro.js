$(document).ready(function(){
   /*En este script es el script de la busqueda por filtros, usando la funcion de evento click. Posteriormente se 
    * extrae las opciones seleccionadas por el usuario y a posteriori se especifica la ruta de el archivo json 
    * y con la condicion se compara si el valor dado una propiedad coincide con la expresion regular que se realizo mediante la funcion RedExP 
    * luego de obtener todas las coincidencias se incrusta por medio de la funcion html() los resultados obtenidos
     */    
     
 $('#btnConsultar').click(function() { 
        var lista_ciu = document.getElementById("ciudad");
        var lista_Amb = document.getElementById("Ambientes");
        var lista_TP = document.getElementById("Tipo_Propiedad");
        var lista_TO = document.getElementById("Tipo_Operacion");
        // Obtener el valor de la opción seleccionada
        var valorSeleccionado_ciu = lista_ciu.options[lista_ciu.selectedIndex].value;
         // Obtener el texto que muestra la opción seleccionada
        var valorSeleccionado_ciu = lista_ciu.options[lista_ciu.selectedIndex].text;
        // Obtener el valor de la opción seleccionada
        var valorSeleccionado_Amb = lista_Amb.options[lista_Amb.selectedIndex].value;
         // Obtener el texto que muestra la opción seleccionada
        var valorSeleccionado_Amb = lista_Amb.options[lista_Amb.selectedIndex].text;
        // Obtener el valor de la opción seleccionada
        var valorSeleccionado_TP = lista_TP.options[lista_TP.selectedIndex].value;
         // Obtener el texto que muestra la opción seleccionada
        var valorSeleccionado_TP = lista_TP.options[lista_TP.selectedIndex].text;
        // Obtener el valor de la opción seleccionada
        var valorSeleccionado_TO = lista_TO.options[lista_TO.selectedIndex].value;
         // Obtener el texto que muestra la opción seleccionada
        var valorSeleccionado_TO = lista_TO.options[lista_TO.selectedIndex].text;
        //$("#columna").html('<h2>'+valorSeleccionado_ciu +'</h2>');
        
        var myExpciu = new RegExp(valorSeleccionado_ciu, 'i');
        var myExpAmb = new RegExp(valorSeleccionado_Amb, 'i');
        var myExpTP = new RegExp(valorSeleccionado_TP, 'i');
        var myExpTO = new RegExp(valorSeleccionado_TO, 'i');

         $.getJSON('json/datos.json', function(data){
          var output = '<ul class="searchresult">';
          $.each(data, function(key, val){
              
            if((val.ciudad.search(myExpciu) !== -1) && (val.cant_amb.search(myExpAmb) !== -1)&& (val.tipo_propiedad.search(myExpTP) !== -1)&&(val.tipo_operacion.search(myExpTO) !== -1)||       //4 seleccionados
              ((val.ciudad.search(myExpciu) === -1) && (val.cant_amb.search(myExpAmb) === -1)&& (val.tipo_propiedad.search(myExpTP) === -1)&&(val.tipo_operacion.search(myExpTO) !== -1)&&(valorSeleccionado_TP==='Propiedad')&&(valorSeleccionado_ciu==='Localidad')&&(valorSeleccionado_Amb==='Ambientes'))||//selecciono solo Operacion
              ((val.ciudad.search(myExpciu) !== -1) && (val.cant_amb.search(myExpAmb) === -1)&& (val.tipo_propiedad.search(myExpTP) === -1)&&(val.tipo_operacion.search(myExpTO) === -1)&&(valorSeleccionado_Amb==='Ambientes')&&(valorSeleccionado_TP==='Propiedad')&&(valorSeleccionado_TO==='Operacion'))||//selecciono solo ciudad
              ((val.ciudad.search(myExpciu) === -1) && (val.cant_amb.search(myExpAmb) !== -1)&& (val.tipo_propiedad.search(myExpTP) === -1)&&(val.tipo_operacion.search(myExpTO) === -1)&&(valorSeleccionado_ciu==='Localidad')&&(valorSeleccionado_TP==='Propiedad')&&(valorSeleccionado_TO==='Operacion'))||   //selecciono solo cant_amb    
              ((val.ciudad.search(myExpciu) === -1) && (val.cant_amb.search(myExpAmb) === -1)&& (val.tipo_propiedad.search(myExpTP) !== -1)&&(val.tipo_operacion.search(myExpTO) === -1)&&(valorSeleccionado_TO==='Operacion')&&(valorSeleccionado_ciu==='Localidad')&&(valorSeleccionado_Amb==='Ambientes'))||//selecciono solo Propiedad
              ((val.ciudad.search(myExpciu) !== -1) && (val.cant_amb.search(myExpAmb) !== -1)&& (val.tipo_propiedad.search(myExpTP) === -1)&&(val.tipo_operacion.search(myExpTO) === -1)&&(valorSeleccionado_TP==='Propiedad')&&(valorSeleccionado_TO==='Operacion'))||//sin seleccionar propiedad,operacion
              ((val.ciudad.search(myExpciu) !== -1) && (val.cant_amb.search(myExpAmb) === -1)&& (val.tipo_propiedad.search(myExpTP) !== -1)&&(val.tipo_operacion.search(myExpTO) === -1)&&(valorSeleccionado_Amb==='Ambientes')&&(valorSeleccionado_TO==='Operacion'))||//sin seleccionar cant_amb,operacion 
              ((val.ciudad.search(myExpciu) !== -1) && (val.cant_amb.search(myExpAmb) === -1)&& (val.tipo_propiedad.search(myExpTP) === -1)&&(val.tipo_operacion.search(myExpTO) !== -1)&&(valorSeleccionado_Amb==='Ambientes')&&(valorSeleccionado_TP==='Propiedad'))||//sin seleccionar cant_amb,propiedad
              ((val.ciudad.search(myExpciu) === -1) && (val.cant_amb.search(myExpAmb) !== -1)&& (val.tipo_propiedad.search(myExpTP) !== -1)&&(val.tipo_operacion.search(myExpTO) === -1)&&(valorSeleccionado_ciu==='Localidad')&&(valorSeleccionado_TO==='Operacion'))||//sin seleccionar ciudad,operacion
              ((val.ciudad.search(myExpciu) === -1) && (val.cant_amb.search(myExpAmb) !== -1)&& (val.tipo_propiedad.search(myExpTP) === -1)&&(val.tipo_operacion.search(myExpTO) !== -1)&&(valorSeleccionado_ciu==='Localidad')&&(valorSeleccionado_TP==='Propiedad'))||//sin seleccionar ciudad,propieadad
              ((val.ciudad.search(myExpciu) === -1) && (val.cant_amb.search(myExpAmb) === -1)&& (val.tipo_propiedad.search(myExpTP) !== -1)&&(val.tipo_operacion.search(myExpTO) !== -1)&&(valorSeleccionado_ciu==='Localidad')&&(valorSeleccionado_Amb==='Ambientes'))||//sin seleccionar ciudad,cant_a
              ((val.ciudad.search(myExpciu) !== -1) && (val.cant_amb.search(myExpAmb) !== -1)&& (val.tipo_propiedad.search(myExpTP) !== -1)&&(val.tipo_operacion.search(myExpTO) === -1)&&(valorSeleccionado_TO==='Operacion'))||//sin seleccionar operacion
              ((val.ciudad.search(myExpciu) !== -1) && (val.cant_amb.search(myExpAmb) !== -1)&& (val.tipo_propiedad.search(myExpTP) === -1)&&(val.tipo_operacion.search(myExpTO) !== -1)&&(valorSeleccionado_TP==='Propiedad'))||//sin seleccionar propiedad
              ((val.ciudad.search(myExpciu) === -1) && (val.cant_amb.search(myExpAmb) !== -1)&& (val.tipo_propiedad.search(myExpTP) !== -1)&&(val.tipo_operacion.search(myExpTO) !== -1)&&(valorSeleccionado_ciu==='Localidad'))||//sin seleccionar ciudad
              ((val.ciudad.search(myExpciu) !== -1) && (val.cant_amb.search(myExpAmb) === -1)&& (val.tipo_propiedad.search(myExpTP) !== -1)&&(val.tipo_operacion.search(myExpTO) !== -1)&&(valorSeleccionado_Amb==='Ambientes'))){//sin seleccionar cant_amb
                    output +='<li>';
                    output +='<div id="encierraPropiedades">';
                    output +='<h3>Tipo de Propiedad </h3> <h4>' + val.tipo_propiedad+'</h4>';
                    output +='<h3>Direccion </h3> <h4>' + val.direccion+'</h4>';
                    output +='<h3>Ciudad </h3> <h4>' + val.ciudad+ '</h4>';
                    output +='<h3>Cantidad de Ambientes </h3> <h4>' + val.cant_amb+'</h4>';
                    output +='<h3>Tipo de Operacion </h3> <h4>' + val.tipo_operacion+ '</h4>';  
                    output +='<br>';
                    output +='<div id="encierrafotos">';
                    output +='<div id="midiv" ><img alt="alt_imagen1"  src="imagenes/'+val.shortname1+'.png" /></div>';
                    output +='<div id="midiv"><img alt="alt_imagen2"  src="imagenes/'+val.shortname2+'.png" /></div>';
                    output +='<div id="midiv"><img alt="alt_imagen3" src="imagenes/'+val.shortname3+'.png" /></div>';
                    output +='</div>';
                    output +='</div>';
                    output +='</li>';
               }
           
          });
          output += '</ul>';
          $('#update').html(output);
//               
        });
    });
});