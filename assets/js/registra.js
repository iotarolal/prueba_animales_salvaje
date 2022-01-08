
$('#btnRegistrar').on('click', function() {

    const nombre_animal = $('#animal').val();
    const rangoanios = $('#edad').val();
    const comentarios = $('#comentarios').val().trim();

    // Valido datos de entrada y seleccióm
    const errores = [];
    if (nombre_animal == "") {
        errores.push("Debe seleccionar un Animal");
    } 

    if (rangoanios == "") {
        errores.push("Debe seleccionar Rango de Edad");
    } 

    if (comentarios == "") {
        errores.push("Debe ingresar comentario");
    } 
    
    if (errores.length > 0){
        alert(errores);
        return;  
    }

    // Condiciono por nombre e instancio un objeto
    let nuevo_animal
    if (nombre_animal == "Leon") {
        nuevo_animal = new Leon (nombre_animal, rangoanios, comentarios);
        } else if (nombre_animal == "Lobo") {
            nuevo_animal = new Lobo (nombre_animal, rangoanios,  comentarios);
            } else if (nombre_animal == "Oso") {
                nuevo_animal = new Oso (nombre_animal, rangoanios,  comentarios);
                } else if (nombre_animal == "Serpiente") {
                        nuevo_animal = new Serpiente (nombre_animal, rangoanios, comentarios);
                    } else if (nombre_animal == "Aguila") {
                        nuevo_animal = new Aguila (nombre_animal, rangoanios,  comentarios);
                    }

// Llamo a la Funcion para dibujar el animal a registrar
    dibujoanimales(nuevo_animal);   
})


