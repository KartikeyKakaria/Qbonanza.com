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
fetch("/Qbonanza.com/php/index.php", params)
    .then(response => response.json())
    .then(data => displayTopic("hello"))
    .catch(error => console.log(error))