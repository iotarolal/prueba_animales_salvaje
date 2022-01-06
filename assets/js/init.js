(async function () {
    let data = await fetch('data/animales.json')
    const data2 = await data.json()
    const animales = data2.animales

    $('#animal').on('change', function() {
        // obtengo el valor del "option" seleccionado
        const nombre_animal = $('#animal').val();

        // busco animal seleccionado
        const animal = animales.find( an => an.name == nombre_animal )

        // muestro imagen animal seleccionadoen registro animal 
        $('#preview').css('background-image', `url("assets/imgs/${animal.imagen}")`)
        console.log("entere al iife")


        $('#btnRegistrar').on('click', function() {
            $('#Animales').append(`
            <div class="col-md-3 p-3">
                <img class="d-block w-100" src="assets/imgs/${animal.imagen}" alt="imagen">
            </div>`)

        })
            

    })

    console.log(animales);
})()  // IIFE (Funciones Inmediatamente Ejecutadas)
