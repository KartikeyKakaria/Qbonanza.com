window.onload = ()=>{
    const user = localStorage.getItem('user');
    const href = window.location.href;
    const LastChar = href[href.length - 1];
    console.log(LastChar);
    let dat = {
        post:false,
        id:LastChar,
    };
    // if(user == null) {
    //     let dat = {
    //         post:false,
    //         id:LastChar,
    // //     }
    // }
    // else{
    //     let dat = {
    //         post:true,
    //         id:LastChar,
    //         title:document.querySelector('#title').value,
    //         content:document.querySelector('#content').value,
    //     }
    // }
    let data = JSON.stringify(dat);
    let params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data,
    }
    fetch("/Qbonanza.com/php/topic.php", params)
    .then(response => response.json())
    .then(data => console.log(data))
    // .catch(err => console.log(err))

;}