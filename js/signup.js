$(document).ready(function() {
    // getting all variables
    $("#submit").click(function() {
        //   e.preventDefault();
        //   ajax query                
        let Password = document.querySelector("#password").value;
        let confPassword = document.querySelector("#confirmpassword").value;
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
            // $.post("/Qbonanza.com/php/signup.php", data, function(data, status) {
            //     if (status == "success") {
            //         if (data == "success") {
            //             console.log("Successfully signed up!");
            //         } else {
            //             console.log(data);
            //         }
            //         console.log(data);
            //     } else {
            //         console.log("Error 404")
            //     }
            // })
            let params = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            }
            fetch('/Qbonanza.com/php/signup.php', params)
                .then(response => response.json())
                .then((data) => {
                    if (data.status) {
                        console.log(data.msg)
                    } else {
                        console.log(data.msg)
                    }
                })
                .catch(error => console.log(error))
        } else {
            console.log("Passwords dont match");
            console.log(Password)
            console.log(confPassword)
        }
    })
})