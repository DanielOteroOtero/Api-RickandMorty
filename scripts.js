const url = 'https://rickandmortyapi.com/api/character'

fetch(url)
    .then(res => res.json())
    .then(datos => {
        const item = datos.results
        const name1 = item[0].name
        const name2 = item[1].name
        const name3 = item[2].name
        const name4 = item[3].name
        const name5 = item[4].name
        const name6 = item[5].name
        const name7 = item[6].name
        const name8 = item[7].name
        const name9 = item[8].name
        const name10 = item[9].name
        const name11 = item[10].name
        const name12 = item[11].name
        const name13 = item[12].name
        const name14 = item[13].name
        const name15 = item[14].name

        document.getElementById('nombre1').textContent = name1
        document.getElementById('nombre2').textContent = name2
        document.getElementById('nombre3').textContent = name3
        document.getElementById('nombre4').textContent = name4
        document.getElementById('nombre5').textContent = name5
        document.getElementById('nombre6').textContent = name6
        document.getElementById('nombre7').textContent = name7
        document.getElementById('nombre8').textContent = name8
        document.getElementById('nombre9').textContent = name9
        document.getElementById('nombre10').textContent = name10
        document.getElementById('nombre11').textContent = name11
        document.getElementById('nombre12').textContent = name12
        document.getElementById('nombre13').textContent = name13
        document.getElementById('nombre14').textContent = name14
        document.getElementById('nombre15').textContent = name15

        document.getElementById('pj1').textContent = name1
        document.getElementById('pj2').textContent = name2
        document.getElementById('pj3').textContent = name3
        document.getElementById('pj4').textContent = name4
        document.getElementById('pj5').textContent = name5
        document.getElementById('pj6').textContent = name6
        document.getElementById('pj7').textContent = name7
        document.getElementById('pj8').textContent = name8
        document.getElementById('pj9').textContent = name9
        document.getElementById('pj10').textContent = name10
        document.getElementById('pj11').textContent = name11
        document.getElementById('pj12').textContent = name12
        document.getElementById('pj13').textContent = name13
        document.getElementById('pj14').textContent = name14
        document.getElementById('pj15').textContent = name15
    })

const selectPersonajes = document.getElementById('personajes');
const botonFiltrar = document.getElementById('filtrar');

function cargarOpcionesSelect(datos) {
    const opciones = datos.results.map(personaje => ({
        name: personaje.name,
        id: personaje.id,
    }));

    selectPersonajes.innerHTML = '<option value="todos">Todos los personajes</option>';

    opciones.forEach(opcion => {
        const optionElement = document.createElement('option');
        optionElement.value = opcion.id;
        optionElement.textContent = opcion.name;
        selectPersonajes.appendChild(optionElement);
    });
}

fetch(url)
    .then(res => res.json())
    .then(datos => {
        cargarOpcionesSelect(datos);
    });

botonFiltrar.addEventListener('click', () => {
    const personajeSeleccionado = selectPersonajes.value;

    const tarjetas = document.querySelectorAll('.card');
    tarjetas.forEach(tarjeta => {
        tarjeta.style.display = 'none';
    });

    if (personajeSeleccionado === 'todos') {
        tarjetas.forEach(tarjeta => {
            tarjeta.style.display = 'block';
        });
    } else {
        const tarjetaSeleccionada = document.getElementById(`card${personajeSeleccionado}`);
        tarjetaSeleccionada.style.display = 'block';
    }
});
    

