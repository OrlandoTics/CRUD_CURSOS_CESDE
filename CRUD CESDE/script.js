function validateform() {
    var curso = document.getElementById("curso").value;
    var descripcion = document.getElementById("descripcion").value;
    var duracion = document.getElementById("duracion").value;
    var Precio = document.getElementById("Precio").value;
    var fecha = document.getElementById("fecha").value;
    var docente = document.getElementById("docente").value;
    var documento = document.getElementById("documento").value;
    var email = document.getElementById("email").value;
    if (curso == "") {
        alert("El campo Nombre del curso es Obligatorio");
        return false;
    }

    if (descripcion == "") {
        alert("El campo Descripción del curso es Obligatorio");
        return false;
    }

    if (duracion == "") {
        alert("El campo Duración del curso en semanas es Obligatorio");
        return false;
    }

    if (Precio == "") {
        alert("El campo Precio del curso es Obligatorio");
        return false;
    }
    if (fecha == "") {
        alert("El campo Fecha de inicio del curso es Obligatorio");
        return false;
    }

    if (docente == "") {
        alert("El campo Docente que dicta el curso es Obligatorio");
        return false;
    }

    if (documento == "") {
        alert("El campo Documento Docente es Obligatorio");
        return false;
    }


    if (email == "") {
        alert("El campo Correo Docente es Obligatorio");
        return false;
    } else if (!email.includes("@")) {
        alert("direccion de correo invalida");
        return false;
    }
    return true;
}

function showdata() {
    var cesde;
    if (localStorage.getItem("cesde") == null) {
        cesde = [];
    } else {
        cesde = JSON.parse(localStorage.getItem("cesde"));
    }

    var html = "";

    cesde.forEach(function(element, index) {

        html += "<tr>";
        html += "<td>" + element.curso + "</td>";
        html += "<td>" + element.descripcion + "</td>";
        html += "<td>" + element.duracion + "</td>";
        html += "<td>" + element.Precio + "</td>";
        html += "<td>" + element.fecha + "</td>";
        html += "<td>" + element.docente + "</td>";
        html += "<td>" + element.documento + "</td>";
        html += "<td>" + element.email + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')"class="btn btn-danger">Delete</button><button onclick="updateData(' + index + ')"class="btn btn-warning m-2">Edit</button></td>';
        html += "</td>";
    });

    document.querySelector("#crudtable tbody").innerHTML = html;

}

// carga todos los datos cuando se carga el documento o la página
document.onload = showdata();

// funcion para agregar datos
function AddData() {
    // si el formulario es válido

    if (validateform() == true) {
        var curso = document.getElementById("curso").value;
        var descripcion = document.getElementById("descripcion").value;
        var duracion = document.getElementById("duracion").value;
        var Precio = document.getElementById("Precio").value;
        var fecha = document.getElementById("fecha").value;
        var docente = document.getElementById("docente").value;
        var documento = document.getElementById("documento").value;
        var email = document.getElementById("email").value;


        var cesde;
        if (localStorage.getItem("cesde") == null) {
            cesde = [];
        } else {
            cesde = JSON.parse(localStorage.getItem("cesde"));
        }

        cesde.push({
            curso: curso,
            descripcion: descripcion,
            duracion: duracion,
            Precio: Precio,
            fecha: fecha,
            docente: docente,
            documento: documento,
            email: email,
        });

        localStorage.setItem("cesde", JSON.stringify(cesde));
        showdata();

        document.getElementById("curso").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("duracion").value = "";
        document.getElementById("Precio").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("docente").value = "";
        document.getElementById("documento").value = "";
        document.getElementById("email").value = "";

    }

}

// función para eliminar datos del almacenamiento local

function deleteData(index) {
    var cesde;
    if (localStorage.getItem("cesde") == null) {
        cesde = [];
    } else {
        cesde = JSON.parse(localStorage.getItem("cesde"));
    }
    cesde.splice(index, 1);
    localStorage.setItem("cesde", JSON.stringify(cesde));
    showdata();

}

// función para actualizar/editar datos en el almacenamiento local

function updateData(index) {
    // el botón enviar se ocultará y el botón actualizar se mostrará para actualizar los datos en el almacenamiento local

    document.getElementById("submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    var cesde;
    if (localStorage.getItem("cesde") == null) {
        cesde = [];
    } else {
        cesde = JSON.parse(localStorage.getItem("cesde"));
    }

    document.getElementById("curso").value = cesde[index].curso;
    document.getElementById("descripcion").value = cesde[index].descripcion;
    document.getElementById("duracion").value = cesde[index].duracion;
    document.getElementById("Precio").value = cesde[index].Precio;
    document.getElementById("fecha").value = cesde[index].fecha;
    document.getElementById("docente").value = cesde[index].docente;
    document.getElementById("documento").value = cesde[index].documento;
    document.getElementById("email").value = cesde[index].email;

    document.querySelector("#Update").onclick = function() {
        if (validateform() == true) {
            cesde[index].curso = document.getElementById("curso").value;
            cesde[index].descripcion = document.getElementById("descripcion").value;
            cesde[index].duracion = document.getElementById("duracion").value;
            cesde[index].Precio = document.getElementById("Precio").value;
            cesde[index].fecha = document.getElementById("fecha").value;
            cesde[index].docente = document.getElementById("docente").value;
            cesde[index].documento = document.getElementById("documento").value;
            cesde[index].email = document.getElementById("email").value;



            localStorage.setItem("cesde", JSON.stringify(cesde));
            showdata();

            document.getElementById("curso").value = "";
            document.getElementById("descripcion").value = "";
            document.getElementById("duracion").value = "";
            document.getElementById("Precio").value = "";
            document.getElementById("fecha").value = "";
            document.getElementById("docente").value = "";
            document.getElementById("documento").value = "";
            document.getElementById("email").value = "";




            // El botón Actualizar se ocultará y el botón Enviar se mostrará 
            document.getElementById("submit").style.display = "block";
            document.getElementById("Update").style.display = "none";
        }
    }


}