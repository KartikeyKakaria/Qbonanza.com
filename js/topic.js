window.onload = ()=>{
    const user = localStorage.getItem('user');
    const href = window.location.href;
    const LastChar = href[href.length - 1];
    console.log(LastChar);
    let dat = {
        id:LastChar,
    }
    // if(user == null) {
    //     let dat = { 
    //         post:false,
    //         id:LastChar,
    //     };
    // }
    // else{
    //     let dat = {
    //         post:true,
    //         id:LastChar,
    //         title:document.querySelector('#title').value,
    //         content:document.querySelector('#content').value,
    //     }
    // }
    let data1 = JSON.stringify(dat);
    let params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: data1,
    }
    fetch("/Qbonanza.com/php/topic.php", params)
    .then(response => response.json())
    .then(data => {
        
        let questions = data.question;
        let str ="";
        questions.forEach(question => {
            let name = "";
            dat = {
                method:'post',
                hedares:{
                    'Content-type': 'application/json',
                },
                body:JSON.stringify({id:question.user_id})
            }
            fetch("/Qbonanza.com/php/partials/_getusername.php",dat)
            .then(response=>response.text())
            .then(nam =>  {
                name = nam;
                str+="<div class='question'><h2>"+question.title+"</h2><p>"+question.description+"</p><br><p>Posted by "+name+" on "+question.date+"</p></div>";
                document.querySelector("#questions").innerHTML = str;
                // console.log("data success")
            })
            // .catch(err => console.error(err))
            
        })
    })
    // .catch(err => console.log(err))

;}