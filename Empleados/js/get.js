window.onload = init;

function init(){
    if (!localStorage.getItem("token")) {
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "Main.html"
        });
    
        document.querySelector('.btn-primary').addEventListener('click', get);
    }
    else{
        window.location.href = "login.html"
    }
   
}

function get() {
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lastname').value;
    var number = document.getElementById('input-number').value;
    var mail = document.getElementById('input-mail').value;
    var direction = document.getElementById('input-direction').value;

    axios({
        method: 'get',
        url: 'http://localhost:3000/empleados/',
        data: {
            nombre: name
        }
    }).then(function(res) {
        console.log(res);
        alert("Busqueda exitosa");
        window.location.href="Main.html";
    }).catch(function(err){
        console.log(err);
    })
}