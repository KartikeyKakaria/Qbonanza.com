window.onload = ()=>{
    const user = localStorage.getItem('user');
    const href = window.location.href;
    const LastChar = href[href.length - 1];
    // console.log(LastChar);
    function showQuestions(id){
        let dat = {
            id:id,
        }
        
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
                // let name = ""; , 
                str+="<div class='question'><h4>"+question.title+"</h4><p>"+question.description+"</p><br><p>Posted by "+question.id+" on "+question.date+"</p></div>";
                document.querySelector("#questions").innerHTML = str;
                // .catch(err => console.error(err))
                
            })
        })
    }
    showQuestions(LastChar);
    if(user == null){
        document.querySelector("#ask").innerHTML = "<h2>Please login to ask questions</h2>"
    }
    else{
        document.querySelector("#ask").innerHTML = '<label for="title">Title:</label><input type="text" class="form-control" placeholder="enter title" id="title"><br><label for="description">Description:</label><textarea placeholder="enter title" id="description" cols="15" rows="10" class="form-control"></textarea><br><button id="ask" class="btn btn-warning">Ask</button>';
        document.querySelector("#ask").addEventListener("click",()=>{
            const userId = JSON.parse(user).id;
            const title = document.querySelector("#title").value;
            const description = document.querySelector("#description").value;
            const id = LastChar;
            const data = {
                user_id:userId,
                title:title,
                description:description,
                id:id,
            }
            const params = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
            fetch('/Qbonanza.com/php/post.php',params)
            .then(response => response.json())
            .then(data => console.log(data))
            .then
            
        })
    }
    
    // .catch(err => console.log(err))

;}