function displayData() {
    //gets data from ls
    const user = JSON.parse(localStorage.getItem('user'));
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let age = document.querySelector("#age");
    let hName = document.querySelector("#headerName");
    let hEmail = document.querySelector("#headerEmail");
    let navName = document.querySelector("#navName");
    //displays data
    name.innerHTML = user.name;
    email.innerHTML = user.email;
    age.innerHTML = user.age;
    hName.innerHTML = user.name;
    hEmail.innerHTML = user.email;
    navName.innerHTML = user.name;
    document.querySelector('#footer').innerHTML = '<td><button class="btn btn-danger" id="edit">Edit <img src="images/pen.png" alt="edit" height="30px" width="15px"></button></td>';
}
window.onload = () => {
    displayData();
    const lol = localStorage.getItem('user');
    if (lol == null) {
        //go to index if user not loginned
        window.location = "index.html";
    } else {
        //if user clicks edit, change data to form
        document.querySelector("#edit").addEventListener("click", () => {
            document.querySelector("#name").innerHTML = "<input id='namer' placeholder='enter name'>";
            document.querySelector("#email").innerHTML = "<input id='emailer' placeholder='Enter email'>";
            document.querySelector("#age").innerHTML = "<input id='ager' placeholder='Enter age'>";
            // document.querySelector('thead').innerHTML = '';
            document.querySelector('#footer').innerHTML = '<td><button class="btn btn-success" id="submit">Submit</button></td>';
            document.querySelector("#submit").addEventListener("click", () => {
                //once user clicks submit, then post the data in fetch
                alert('hi')
                let dat = {
                    name: document.querySelector("#namer").value,
                    email: document.querySelector("#emailer").value,
                    age: document.querySelector("#ager").value,
                    id: JSON.parse(localStorage.getItem('user')).id,
                }
                let data = JSON.stringify(dat);
                let parameters = {
                    method: "post",
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: data,
                }
                fetch("/Qbonanza.com/php/profile.php", parameters)
                    .then(response => response.json())
                    .then((data) => {
                        if (data.status) {
                            console.log(data.msg)
                                //if successfully edits, then update ls
                            let newUse = {
                                login: true,
                                id: data.id,
                                name: data.name,
                                email: data.email,
                                age: data.age,
                            }
                            let newUser = JSON.stringify(newUse);
                            localStorage.setItem('user', newUser);
                            displayData();
                        } else {
                            console.log(data.msg)
                        }
                    })
            })
        })
    }
    console.log("HI");
}