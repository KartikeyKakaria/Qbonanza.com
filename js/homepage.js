const login = localStorage.getItem('user');
const span = document.querySelector('#title');
if (user !== null) {
    let data = JSON.parse(login);
    span.innerHTML = data.name;
} else {
    span.innerHTML = "to Qbonanza";
}

function displayData(data) {
    let htmlStr = "";
    data.forEach((element)=>{
        htmlStr+=`<div class="topic"><img src="images/topic/${element.id}.png" height="75px" width="75px"alt="USER"><br><button id="${element.id}">${element.name}</button></div>`;
    })
    document.querySelector('#topics').innerHTML = htmlStr;
    // console.log(htmlStr);
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