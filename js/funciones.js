// const url = 'http://localhost:8080/Profesionales'
const url = 'http://localhost:8081/profesionales'

const listarUsuarios = async () => {
    //Objeto del html donde se deslegará la información
    let objectId = document.getElementById('contenido')
    let contenido = ''//Contiene filas y celdas que se desplegarán en el tbody

    //Fecth permite reaizar peticiones http a una url
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((res) => res.json())//Obtener respuesta de la petición
        .then(function (data) {//Se manipulan los datos obtenidos de la url
            let listaUsuarios = data.msg //msg es el nombre de la lista retorna con json
            // console.log(listaUsuarios)
            listaUsuarios.map(function (usuario) {
                //Configurar el objeto para enviarlo por URL
                objetoUsuario = Object.keys(usuario).map(key => key + '=' + encodeURIComponent(usuario[key])).join('&');
                // console.log(usuario)
                contenido = contenido + `<tr>` +
                `<td>` + usuario.tipo_documento + `</td>` +
                `<td>` + usuario.numero_documento + `</td>` +
                `<td>` + usuario.nombre_profesional + `</td>` +
                `<td>` + usuario.apellido_profesional + `</td>` +
                `<td>` + usuario.fecha_nacimiento + `</td>` + 
                `<td>` + usuario.edad + `</td>` +          
                `<td>` + usuario.pais_nacimiento + `</td>` +
                `<td>` + usuario.dep_nacimiento + `</td>` +
                `<td>` + usuario.mun_nacimiento + `</td>` +
                `<td>` + usuario.genero + `</td>` +
                `<td><button type="button" class="btn btn-danger" onclick=" confirmarEliminar('${usuario.nombre_profesional}')">Eliminar</button></td>` +
                `<td><button onclick="redireccionarEditar('${usuario.tipo_documento}', '${usuario.numero_documento}', '${usuario.nombre_profesional}', '${usuario.apellido_profesional}', '${usuario.fecha_nacimiento}', '${usuario.edad}', '${usuario.pais_nacimiento}', '${usuario.dep_nacimiento}', '${usuario.mun_nacimiento}', '${usuario.genero}')">Editar</button></td>` +
                `</tr>`
            })
            objectId.innerHTML = contenido
        })

}

const registrarUsuario = () => {
    const tipoDoc = document.getElementById('tipoDoc').value
    const numDoc = document.getElementById('numDoc').value
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const fechaNacimiento = document.getElementById('fechaNacimiento').value
    const edad = document.getElementById('edad').value
    const paisNacimiento = document.getElementById('paisNacimiento').value
    const depNacimiento = document.getElementById('depNacimiento').value
    const munNacimiento = document.getElementById('munNacimiento').value
    const genero = document.getElementById('genero').value

    if (tipoDoc.length == 0) {
        document.getElementById('tipoDocHelp').innerHTML = 'Dato requerido'
    }
    else if (numDoc == 0) {
        document.getElementById('numDocHelp').innerHTML = 'Dato requerido'
    }
    else if (nombre.length == 0) {
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'
    }
    else if (apellido.length == 0) {
        document.getElementById('apellidoHelp').innerHTML = 'Dato requerido'
    }
    else if (fechaNacimiento.length == 0) {
        document.getElementById('fechaNacimientoHelp').innerHTML = 'Dato requerido'
    }
    else if (edad.length == 0) {
        document.getElementById('edadHelp').innerHTML = 'Dato requerido'
    }
    else if (paisNacimiento.length == 0) {
        document.getElementById('paisNacimientoHelp').innerHTML = 'Dato requerido'
    }
    else if (depNacimiento.length == 0) {
        document.getElementById('depNacimientoHelp').innerHTML = 'Dato requerido'
    }
    else if (munNacimiento.length == 0) {
        document.getElementById('munNacimientoHelp').innerHTML = 'Dato requerido'
    }
    else if (genero.length == 0) {
        document.getElementById('generoHelp').innerHTML = 'Dato requerido'
    }
    else {
        let usuario = {
            tipo_documento: tipoDoc,
            numero_documento: numDoc,
            nombre_profesional: nombre,
            apellido_profesional: apellido,
            fecha_nacimiento: fechaNacimiento,
            edad: edad,
            pais_nacimiento: paisNacimiento,
            dep_nacimiento: depNacimiento,
            mun_nacimiento: munNacimiento,
            genero: genero
        }

        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(usuario),//Convertir el objeto a JSON
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            
            .then((res) => res.json())//Obtener respuesta de la petición
            .then(json => {
                console.log(json.msg)
                // alert(json.msg) //Imprimir el mensaje de la transacción
                setTimeout(() => {
                    // window.location.href='index.html';
                }, 1000);
            })
    }
}

const actualizarUsuario = () => {
    const tipoDoc = document.getElementById('tipoDoc').value
    const numDoc = document.getElementById('numDoc').value
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    const fechaNacimiento = document.getElementById('fechaNacimiento').value
    const edad = document.getElementById('edad').value
    const paisNacimiento = document.getElementById('paisNacimiento').value
    const depNacimiento = document.getElementById('depNacimiento').value
    const munNacimiento = document.getElementById('munNacimiento').value
    const genero = document.getElementById('genero').value

    if (tipoDoc.length == 0) {
        document.getElementById('tipoDocHelp').innerHTML = 'Dato requerido'
    }
    else if (numDoc == 0) {
        document.getElementById('numDocHelp').innerHTML = 'Dato requerido'
    }
    else if (nombre.length == 0) {
        document.getElementById('nombreHelp').innerHTML = 'Dato requerido'
    }
    else if (apellido.length == 0) {
        document.getElementById('apellidoHelp').innerHTML = 'Dato requerido'
    }
    else if (fechaNacimiento.length == 0) {
        document.getElementById('fechaNacimientoHelp').innerHTML = 'Dato requerido'
    }
    else if (edad.length == 0) {
        document.getElementById('edadHelp').innerHTML = 'Dato requerido'
    }
    else if (paisNacimiento.length == 0) {
        document.getElementById('paisNacimientoHelp').innerHTML = 'Dato requerido'
    }
    else if (depNacimiento.length == 0) {
        document.getElementById('depNacimientoHelp').innerHTML = 'Dato requerido'
    }
    else if (munNacimiento.length == 0) {
        document.getElementById('munNacimientoHelp').innerHTML = 'Dato requerido'
    }
    else if (genero.length == 0) {
        document.getElementById('generoHelp').innerHTML = 'Dato requerido'
    }
    else {
        let usuario = {
            tipo_documento: tipoDoc,
            numero_documento: numDoc,
            nombre_profesional: nombre,
            apellido_profesional: apellido,
            fecha_nacimiento: fechaNacimiento,
            edad: edad,
            pais_nacimiento: paisNacimiento,
            dep_nacimiento: depNacimiento,
            mun_nacimiento: munNacimiento,
            genero: genero
        }

        //Fecth permite reaizar peticiones http a una url
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(usuario),//Convertir el objeto a JSON
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then((res) => res.json())//Obtener respuesta de la petición
            .then(json => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: (json.msg),
                    showConfirmButton: false,
                    timer: 1500
                });

                setTimeout(() => {
                    window.location.href='index.html';
                }, 1000);
            })
    }
}

const redireccionarEditar = (tipo_documento, numero_documento, nombre_profesional, apellido_profesional, fecha_nacimiento, edad, pais_nacimiento, dep_nacimiento, mun_nacimiento, genero ) => {
    document.location.href = `editarUsuarios.html?tipo_documento=${tipo_documento}&numero_documento=${numero_documento}&nombre_profesional=${nombre_profesional}&apellido_profesional=${apellido_profesional}&fecha_nacimiento=${fecha_nacimiento}&edad=${edad}&pais_nacimiento=${pais_nacimiento}&dep_nacimiento=${dep_nacimiento}&mun_nacimiento=${mun_nacimiento}&genero=${genero}`;
}

const editarUsuario = () => {
    //Obtener datos de la URL
    var urlParams = new URLSearchParams(window.location.search);
    //Asignar valores a cajas de texto
    document.getElementById('tipoDoc').value = urlParams.get('tipo_documento')
    document.getElementById('numDoc').value = urlParams.get('numero_documento') 
    document.getElementById('nombre').value = urlParams.get('nombre_profesional')
    document.getElementById('apellido').value = urlParams.get('apellido_profesional') 
    document.getElementById('fechaNacimiento').value = urlParams.get('fecha_nacimiento')
    document.getElementById('edad').value = urlParams.get('edad')
    document.getElementById('paisNacimiento').value = urlParams.get('pais_nacimiento')
    document.getElementById('depNacimiento').value = urlParams.get('dep_nacimiento')
    document.getElementById('munNacimiento').value = urlParams.get('mun_nacimiento')
    document.getElementById('genero').value = urlParams.get('genero')
}

if (document.querySelector('#btnRegistrar')) { //Si el objeto existe
    document.querySelector('#btnRegistrar')
        .addEventListener('click', registrarUsuario)
}
if (document.querySelector('#btnActualizar')) {
    document.querySelector('#btnActualizar')
        .addEventListener('click', actualizarUsuario)
}


const eliminarProfesional = async (nombre_profesional) => {
    try {
        const deleteUrl = `${url}`;  // Solo la ruta base, ya que el ID irá en el cuerpo de la solicitud

        const response = await fetch(deleteUrl, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({ nombre_profesional })  // Incluye el ID en el cuerpo de la solicitud
        });

        if (!response.ok) {
            throw new Error(`Error al eliminar. Código de respuesta: ${response.status}`);
        }

        const json = await response.json();
        Swal.fire({
            position: "center",
            icon: "success",
            title: (json.msg),
            showConfirmButton: false,
            timer: 1500
        });

        setTimeout(() => {
            listarUsuarios();
        }, 1000);

    } catch (error) {
        console.error('Error al eliminar el profesional:', error.message);
        // Puedes manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario.
        alert('Error al eliminar el profesional. Por favor, inténtalo de nuevo más tarde.');
    }

};
function confirmarEliminar(nombre_profesional) {


    Swal.fire({
        title: "¿Estás seguro de que deseas eliminar este Profesional?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar"
    }).then((result) => {
        if (result.isConfirmed) {
            eliminarProfesional(nombre_profesional);
        }
    });
}