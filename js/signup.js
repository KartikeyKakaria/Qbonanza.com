$(document).ready(function() {
    // getting all variables
    $("#submit").click(function() {
        //   e.preventDefault();
        //   ajax query                
        let Password = document.querySelector("#password").value;
        let confPassword = document.querySelector("#confirmpassword").value;
        //check whether the 2 passwords are same or not
        if (Password == confPassword) {
            let name = document.querySelector("#name").value;
            let email = document.querySelector("#email").value;
            let Age = document.querySelector("#age").value;
            let dat = {
                // these are the variables sent via ajax to the php
                name: name,
                email: email,
                age: Age,
                password: Password
            }
            let data = JSON.stringify(dat);

            let params = {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: data
                }
                //sent the data to mysql database
            fetch('/Qbonanza.com/php/signup.php', params)
                .then(response => response.json())
                .then((data) => {
                    //if successfully posted
                    if (data.status) {
                        //tell the user that it happened
                        document.querySelector("#alert").innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Success!</strong> ${data.msg}<br>Login page:- <a href="login.html">Login</a><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
                    } else {
                        //if not warn the user
                        document.querySelector("#alert").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Error!</strong> ${data.msg}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
                    }
                })
                // .catch((error) => {
                //     document.querySelector("#alert").innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Error!</strong> ${error}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
                // })
        } else {
            //if passwords do not match warn the user
            console.log("Passwords dont match");
            console.log(Password)
            console.log(confPassword)
        }
    })
})