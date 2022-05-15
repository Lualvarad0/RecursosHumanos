window.onload = init;
var headers = {};
var url = "http://localhost:3000"

function init(){
    if (localStorage.getItem("token")) {
        token = localStorage.getItem("token");
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        loadEmploye();
    }
    else{
        window.location.href="index.html";
    }
}

function loadEmploye(){
    axios.get(url+"/empleados", headers).then(function(res){
        console.log(res);
        displayEmploye(res.data.message);
    }).catch(function(err){
        console.log(err);
    })
}

function displayEmploye(recursoshumanos){
    var body = document.querySelector("body");
    for(var i=0;i<recursoshumanos.lenght;i++){
        body.innerHTML += `<h3>${recursoshumanos[i].nombre}</h3>`;
        body.innerHTML += `<h4>${recursoshumanos[i].apellidos}</h4>`;
        body.innerHTML += `<h4>${recursoshumanos[i].telefono}</h4>`;
        body.innerHTML += `<h4>${recursoshumanos[i].correo}</h4>`;
        body.innerHTML += `<h4>${recursoshumanos[i].direccion}</h4>`;

    }
}