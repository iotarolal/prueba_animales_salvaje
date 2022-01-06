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
        console.log("entere al iife")


        $('#btnRegistrar').on('click', function() {
            console.log("Entre mostrar animales")

            let nuevo_animal
            if (nombre_animal == "Leon") {
                nuevo_animal = new Leon (nombre_animal, 5, 'probando');
            } else if (nombre_animal == "Lobo") {
                nuevo_animal = new Lobo (nombre_animal, 5,  'probando');
            } else if (nombre_animal == "Oso") {
                nuevo_animal = new Oso (nombre_animal, 5,  'probando');
            } else 
            if (nombre_animal == "Serpiente") {
                nuevo_animal = new Serpiente (nombre_animal, 5, 'probando');
            } else if (nombre_animal == "Aguila") {
                nuevo_animal = new Aguila (nombre_animal, 5,  'probando');
            }

            console.log(nuevo_animal)
            console.log(nuevo_animal.img)
            console.log(nuevo_animal.sonido)


            $('#Animales').append(`
                <div class="card m-1 bg-secondary" style="max-width: 8rem">
                    <img src="${nuevo_animal.img}" class="card-img-top foto-modal" alt="animal" data-bs-toggle="modal" data-bs-ta>
                    <div class="card-body py-1”
                        <button class="btn btn-sonido btn-primary bg-transparent border-0" data-nombre=${nombre_animal}>
                        <i class="fas fa-volume-up”></i>
                    </div>
            `)

        })
            

    })
//                        <i class="fas fa-volumen-up"></i>

    console.log(animales);
})()  // IIFE (Funciones Inmediatamente Ejecutadas)

