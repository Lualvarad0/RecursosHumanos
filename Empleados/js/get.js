window.onload = init;
var headers = {};

function init(){
    if (localStorage.getItem("token")) {
        token = localStorage.getItem("token");
        headers = {
            headers: {
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "Main.html"
        });
    
        document.querySelector('.btn-primary').addEventListener('click', get);
    }
    else{
        window.location.href="login.html";
    }
}


function get() {
    var name = document.getElementById('input-name').value;

    axios.get("http://localhost:3000/empleados/"+name, headers).then(function(res){
        console.log(res);
        displayEmploye(res.data.message);
    }).catch(function(err){
        console.log(err);
    })
}

function displayEmploye(empleados){
    var body = document.querySelector("body");
    for(var i=0;i<empleados.lenght;i++){
        body.innerHTML += `<h3>${empleados[i].message}</h3>`;
        body.innerHTML += `<h4>${empleados[i].apellidos}</h4>`;
        body.innerHTML += `<h4>${empleados[i].telefono}</h4>`;
        body.innerHTML += `<h4>${empleados[i].correo}</h4>`;
        body.innerHTML += `<h4>${empleados[i].direccion}</h4>`;

    }
}