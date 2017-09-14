$(document).ready(function(){
/*En este script es el script de la busqueda en vivo, usando la funcion de evento keyup. Luego se especifica la ruta de el archivo json 
 * y con la condicion se compara si el valor dado una propiedad coincide con la expresion regular que se realizo mediante la funcion RedExP 
 * luego de obtener todas las coincidencias se incrusta por medio de la funcion html() los resultados obtenidos
 */   
  
    $('#search').keyup(function(){
    var searchField = $('#search').val();
    var myExp = new RegExp(searchField, 'i');
    $.getJSON('json/datos.json', function(data){
    var output = '<ul class="searchresult">';
    $.each(data, function(key, val){
        if((val.tipo_propiedad.search(myExp) !== -1)|| 
            (val.direccion.search(myExp) !== -1)||
            (val.ciudad.search(myExp) !== -1)||
            (val.cant_amb.search(myExp) !== -1)||
            (val.tipo_operacion.search(myExp) !== -1)) {
            output +='<li>';
            output +='<div id="encierraPropiedades">';
            output +='<h3>Tipo de Propiedad  <h4>' + val.tipo_propiedad+'</h4></h3>';
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
});

});
});    
    