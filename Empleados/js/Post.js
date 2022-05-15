window.onload = init;

function init(){
    if (!localStorage.getItem("token")) {
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "Main.html"
        });
    
        document.querySelector('.btn-primary').addEventListener('click', post);
    }
    else{
        window.location.href = "login.html"
    }


   
}

function post() {
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lastname').value;
    var number = document.getElementById('input-number').value;
    var mail = document.getElementById('input-mail').value;
    var direction = document.getElementById('input-direction').value;

    axios({
        method: 'post',
        url: 'http://localhost:3000/empleados/',
        data: {
            nombre: name,
            apellidos: lastname,
            telefono: number,
            correo: mail,
            direccion: direction
        }
    }).then(function(res) {
        console.log(res);
        alert("Registro exitoso");
        window.location.href="Main.html";
    }).catch(function(err){
        console.log(err);
    })
}