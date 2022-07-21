window.onload = () => {
    //if login is clicked
    document.querySelector("#login").addEventListener('click', (e) => {
        e.preventDefault();
        //get the credentials
        let email = document.querySelector("#email").value;
        let password = document.querySelector("#passowrd").value;
        //send them to php
        let data1 = {
            email: email,
            password: password,
        }
        let data = JSON.stringify(data1);
        let parameters = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }
        fetch("/Qbonanza.com/php/login.php", parameters)
            .then(response => response.json())
            .then((data) => {
                //if credentials are correct, update ls to user loginned
                if (data.login) {
                    console.log(data.message);
                    user = JSON.stringify(data);
                    localStorage.setItem('user', user);
                    document.querySelector("#alert").innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert"><strong>Success!</strong> ${data.message}<br>Go to homepage:- <a href="index.html">home</a><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
                    // console.log(data.msg)
                    //update the header
                    updateHeader();
                } else {
                    //warn the user that credentials are invalid
                    document.querySelector("#alert").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Error!</strong> ${data.msg}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
                }
                console.log(JSON.parse(data));
            })
            .catch((error) => {
                //check for any web error
                document.querySelector("#alert").innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>Error!</strong> ${error}<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
            })
    })
}