window.onload = () => {
    const user = localStorage.getItem('user');
    //check the topic id
    const href = window.location.href;
    const LastChar = href[href.length - 1];
    // console.log(LastChar);
    //display questions
    function showQuestions(id) {
        let dat = {
            id: id,
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
                let str = "";
                questions.forEach(question => {
                    // let name = ""; , 
                    //get the name of akser
                    getusername(question.user_id)
                        .then(data => {
                            //display every question
                            str += `<div class='question'><a href=question.html?id=${question.id}><h4>${question.title}</h4></a><p>${question.description}</p><br><p>Posted by ${data} on ${question.date}</p></div>`;
                            document.querySelector("#questions").innerHTML = str;
                        })
                        .catch(err => console.log(err))
                        // .catch(err => console.error(err))

                })
            })
    }
    showQuestions(LastChar);
    //if user isnt loginned, dont allow him to ask
    if (user == null) {
        document.querySelector("#ask").innerHTML = "<h2>Please login to ask questions</h2>"
    } else {
        document.querySelector("#ask").innerHTML = '<label for="title">Title:</label><input type="text" class="form-control" placeholder="enter title" id="title"><br><label for="description">Description:</label><textarea placeholder="enter title" id="description" cols="15" rows="10" class="form-control"></textarea><br><button id="askBtn" class="btn btn-warning">Ask</button>';
        document.querySelector("#askBtn").addEventListener("click", () => {
            //send sql to post.php, to post the question
            const userId = JSON.parse(user).id;
            const title = document.querySelector("#title").value;
            const description = document.querySelector("#description").value;
            const id = LastChar;
            const data = {
                sql: "INSERT INTO `qbonanza`.`questions` (`id`, `user_id`, `topic_id`, `title`,`description`, `date`) VALUES ('', '" + userId + "', '" + id + "', '" + title + "','" + description + "', current_timestamp());",
            }
            const params = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }
            fetch('/Qbonanza.com/php/post.php', params)
                .then(response => response.json())
                .then(data => {
                    console.log(data.msg);
                    //show questions once question is posted
                    showQuestions(LastChar);
                })
                .catch(err => console.log(err))

        })
    }

    // .catch(err => console.log(err))

    ;
}