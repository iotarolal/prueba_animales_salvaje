import {Leon, Lobo, Oso, Serpiente, Aguila} from './Animales.js'

(async function () {
    let data = await fetch('data/animales.json')
    const data2 = await data.json()
    const animales = data2.animales

    $('#animal').on('change', function() {
        // obtengo el valor del "option" seleccionado
        const nombre_animal = $('#animal').val();

        const animal = animales.find( an => an.name == nombre_animal )

        $('#preview').css('background-image', `url("assets/imgs/${animal.imagen}")`)

    })

    console.log(animal)
})()  // IIFE (Funciones Inmediatamente Ejecutadas)

const animales = [];

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
    console.log("entre a registrar")                    
    animales.push(nuevo_animal);
    nuevo_animal.rugir;
    console.log(animales);
    dibujoanimales(animales);   

    $('#animal').prop('selectedIndex',0);
    $('#edad').prop('selectedIndex',0);
    $('#comentarios').html('');

})

// Funcion para dibujat animal a registrar
function dibujoanimales(animales) {
    let i = 
    $('#Animales').html("");
    console.log("entre funcion dibujoanimales");
    for (const animal of animales) {
        console.log(`${animal.img}`)
        $('#Animales').append(`
            <div class="card m-1 bg-secondary" style="max-width: 08rem">
                <img src="${animal.img}" class="card-img-top" alt="animal">
                <div class="card-body py-1”>
                    <button type="button"> <img src="assets/imgs/audio.svg" height ="40" width="40"/></button>          
                </div>
            </div>
        `)
        i ++
    }
}
