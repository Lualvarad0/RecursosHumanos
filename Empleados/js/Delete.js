window.onload = init;

function init(){
    if (!localStorage.getItem("token")) {
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href = "Main.html"
        });
    
        document.querySelector('.btn-primary').addEventListener('click', del);
    }
    else{
        window.location.href = "login.html"
    }


   
}

function del() {
    var name = document.getElementById('input-name').value;

    axios({
        method: 'delete',
        url: 'http://localhost:3000/empleados/'+name,
        data: {
            nombre: name
        }
    }).then(function(res) {
        console.log(res);
        alert("Baja exitosa");
        window.location.href="Main.html";
    }).catch(function(err){
        console.log(err);
    })
}