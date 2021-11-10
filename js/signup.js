$(document).ready(function() {
    // getting all variables
    $("#signup").click(function() {
        console.log(name);
    })
    $("#signup").click(function() {
        //   e.preventDefault();
        //   ajax query                
        let Password = $("#Passowrd").value;
        let confPassword = $("#confPassword").value;
        if (Password == confPassword) {
            let name = $("#name").value;
            let email = $("#email").value;
            let Age = $("#Age").value;
            $.post("/Qbonanza.com/php/signup.php", {
                // these are the variables sent via ajax to the php
                nam: name,
                emaile: email,
                ager: Age,
                passwordo: Password
            }, function(data, status) {
                if (status == "success") {
                    if (data == "success") {
                        console.log("Successfully signed up!");
                    } else {
                        console.log(data);
                    }
                    console.log(data);
                } else {
                    console.log("Error 404")
                }
            })
        } else {
            console.log("Passwords dont match");
            console.log(Password)
            console.log(confPassword)
        }
    })
})