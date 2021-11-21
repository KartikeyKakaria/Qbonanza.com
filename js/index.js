let user = localStorage.getItem('user');
//gets the user from localStorage
function updateHeader() {

    //checks if the user is loginned or not
    if (user == null) {
        //if user is not loginned set the navbar according to a new user
        document.querySelector('#nav').innerHTML = '<a class="mx-2" href="signup.html"><button type="button" class="btn btn-outline-success">Signup</button></a><a href="login.html"><button type="button" class="btn btn-outline-success">Login</button></a>';


    } else {
        //if user is logged in set the navbar according to the user details
        let userDetails = JSON.parse(user);
        document.querySelector('#nav').innerHTML = '<a href="profile.html" class="mx-2"><button id="navName" type="button" class="btn btn-success">' + userDetails.name + '</button></a><button id="logout" type="button" class="btn btn-warning" id="logout">Logout</button>';
    }
}
updateHeader();
//checks if logout button exists
if (document.querySelector("#logout") !== undefined) {
    document.querySelector("#logout").addEventListener("click", () => {
        //removes the user data from localStorage, although his account still remains in db
        localStorage.removeItem('user');
        //transfers user to login page
        window.location = "login.html";
    })
}