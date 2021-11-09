<?php
$(document).ready(function() {
    $("#signup").submit(function(event){
        //event.preventDefault(); //prevent default action 
        var post_url = $(this).attr("action"); //get form action url
        var request_method = $(this).attr("method"); //get form GET/POST method
        var form_data = $(this).serialize(); //Encode form elements for submission
        
        let name = $("#name").value;
        let email = $("#email").value;
        let age = $("#age").value;
        let password = $("#password").value;
        $.post("post_url",{
            name : name,
            email : email,
            age : age,
            password : password
        },function(response){ 
            //alert("success");
            console.log(response.msg);
        })
       
    });
})
