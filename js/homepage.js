const login = localStorage.getItem('user');
const span = document.querySelector('#title');
if (user !== null) {
    let data = JSON.parse(login);
    span.innerHTML = data.name;
} else {
    span.innerHTML = "to Qbonanza";
}

function displayData(data) {
    while (i < 15) {
        console.log(data);
        i++
    }
}
data = JSON.stringify({lol:"lol"});
let params = {
    method:"post",
    headers:{
        "Content-Type": "application/json"
    },
    body:data,
}
fetch("/Qbonanza.com/php/index.php", params)
    .then(response => response.json())
    .then(data => displayData(data.topic))
    .catch(error => console.log(error))