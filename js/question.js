window.onload = () => {
    const user = localStorage.getItem('user');
    //getting the questionId
    const href = window.location.href;
    const quesId = href[href.length - 1];
    //function to display comments
    function displayComments(ques_id) {
        id = {
            method: 'post',
            headers: {
                'Content-type': 'application/json',
            },
            body: '{"quesid":' + ques_id + '}'

        }
        fetch('php/comments.php', id)
            .then(rep => rep.json())
            .then(comments => {
                let str = "";
                //print every comment
                comments.forEach(comment => {
                    //to get the name of commenter
                    getusername(comment.user_id)
                        .then(name => {
                            str += `<div class='question'><h4>${name} ${comment.date}</h4><p>${comment.content}</p></div>`;
                            document.querySelector("#comments").innerHTML = str;
                        })
                        .catch(err => console.log(err))
                })
            })
    }
    //display
    displayComments(quesId);
    //if user isnt loginned. dont allow him to answer
    if (user == null) {
        document.querySelector('#askdiv').innerHTML = 'PLease login to answer to our threads';
    } else {
        document.querySelector('#askdiv').innerHTML = '<label for="description">Answer:</label><textarea placeholder="enter title" id="answer" cols="15" rows="10" class="form-control"></textarea><br><button id="answerBtn" class="btn btn-warning">Answer</button>';
        //when the user clicks answer then
        document.querySelector('#answerBtn').addEventListener('click', () => {
            //give the sql query to posst.php which will post the data
            const answer = document.querySelector('#answer').value;
            const user_id = JSON.parse(user).id;
            const params = {
                method: 'post',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ sql: "INSERT INTO `qbonanza`.`comments` (`id`, `ques_id`, `user_id`, `content`, `date`) VALUES ('', '" + quesId + "', '" + user_id + "', '" + answer + "', current_timestamp());" })
            }
            fetch('php/post.php', params).then(response => response.json())
                .then(data => {
                    console.log(data);
                    //once the posting is done, display comments again
                    displayComments(quesId);
                })
        })
    }
    //display data about the question
    console.log(quesId)
    id = {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: '{"quesid":' + quesId + '}'
    }
    fetch('php/partials/_getQuesDetails.php', id)
        .then(rep => rep.json())
        .then(question => {
            getusername(question.user_id)
                .then(name => {
                    document.querySelector("#question").innerHTML = `<div class="jumbotron">
                    <h1 class="display-4"> ${question.title}</h1>
                    <p class="lead">${question.description}</p>
                    <hr class="my-4">
                    <p>Posted by <b>${name}</b> on ${question.date}</p>
                </div>`
                })
        })
}