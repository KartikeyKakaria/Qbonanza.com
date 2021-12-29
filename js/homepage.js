const login = localStorage.getItem('user');
const span = document.querySelector('#title');
//personalizing welcome bar
if (user !== null) {
    let data = JSON.parse(login);
    span.innerHTML = data.name;
} else {
    span.innerHTML = "to Qbonanza";
}
//displays the topics
function displayData(data) {
    let htmlStr = "";
    data.forEach((element) => {
        htmlStr += `<div class="topic"><img src="images/topic/${element.id}.png" height="75px" width="75px" alt="USER"><button class="topicBtn" id="${element.id}">${element.name}</button></div>`;
    })
    document.querySelector('#topics').innerHTML = htmlStr;
    //makes the btn of every topic to redirect user to the individual topic page
    let buttons = document.getElementsByClassName('topicBtn');
    Array.from(buttons).forEach((element) => {
            element.addEventListener('click', (e) => {
                window.location = "topic.html?id=" + element.id;
            })
        })
        // console.log(Array.from(buttons));
        // console.log(htmlStr);
}
//gets the list of topic from mysql

data = JSON.stringify({ lol: "lol" });
let params = {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: data,
}
fetch("/Qbonanza.com/php/index.php", params)
    .then(response => response.json())
    .then(data => displayData(data.topic))
    .catch(error => console.log(error))