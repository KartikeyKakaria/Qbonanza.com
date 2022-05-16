let user = localStorage.getItem('user');
//gets the user from localStorage
function updateHeader() {

    //checks if the user is loginned or not
    if (user == null) {
        //if user is not loginned set the navbar according to a new user
        document.querySelector('#nav').innerHTML = '<a class="mx-2" href="signup.html"><button type="button" class="rounded p-2 bg-yellow-300 text-black hover:bg-yellow-600 hover:text-white">Signup</button></a><a class="mx-2" href="login.html"><button type="button" class="rounded p-2 bg-orange:300 text-black hover:bg-orange-600 hover:text-white">Login</button></a>';

        document.querySelector('#navSm').innerHTML = '<a class="mx-2" href="signup.html"><button type="button" class="rounded p-2 bg-yellow-300 text-black hover:bg-yellow-600 hover:text-white">Signup</button></a><a class="mx-2" href="login.html"><button type="button" class="rounded p-2 bg-orange-300 text-black hover:bg-orange-600 hover:text-white">Login</button></a>';


    } else {
        //if user is logged in set the navbar according to the user details
        let userDetails = JSON.parse(user);
        document.querySelector('#nav').innerHTML = '<a href="profile.html" class="mx-2"><button id="navName" type="button" class="bg-green-400 p-2 text-black hover:bg-green-600 hover:text-white">' + userDetails.name + '</button></a><button id="logout" type="button" class="bg-yellow-400 p-2 text-black hover:bg-yellow-600 hover:text-white" id="logout">Logout</button>';
        document.querySelector('#navSm').innerHTML = '<button id="userDrop" class="bg-green-400 p-2 hover:bg-green-600 rounded">' + userDetails.name + '</button><div id="menu" class="fixed hidden bg-gray-200 text-black flex-col rounded mt-1 p-2 text-sm w-32"><a href="profile.html" class="px-2 py-1 hover:bg-blue-500 hover:text-white">Profile</li><a href="notifs.html" class="px-2 py-1 hover:bg-blue-500 hover:text-white">Notifications</li><a class="cursor-pointer hover:text-white px-2 py-1 hover:bg-blue-500">Logout</li></div>';
        const button = document.querySelector("#userDrop");
        const div = document.querySelector("#menu");
        button.addEventListener('click', () => {
            if (div.classList.contains('hidden')) {
                div.classList.remove('hidden');
                div.classList.add('flex')
            } else if (div.classList.contains('flex')) {
                div.classList.remove('flex');
                div.classList.add('hidden')
            }
        })
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


function getQuesDetails(id) {
    data = {
        quesid: id
    }
    let quesId = {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    fetch('/Qbonanza.com/php/partials/_getQuesDetails.php', quesId)
        .then(rep => rep.json())
        .then(result => console.log(result))
}
//gets the name of user by user's id
function getusername(id) {

    dat = {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        }
        //returns a promise :)
    return fetch("/Qbonanza.com/php/partials/_getusername.php", dat, true)
        .then(response => response.text())
        .then(nam => {
            return nam;
        })
        .catch(err => { return err; })
}