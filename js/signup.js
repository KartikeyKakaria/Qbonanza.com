$(document).ready(function() {
    // getting all variables
  let name = $("#name").val();
  let email = $("#email").val();
  let Age = $("#Age").val();  
  let Password = $("#Passowrd").val();
  let confPassword = $("#confPassword").val();
  $("#signup").click(function(){
    //   e.preventDefault();
    //   ajax query                
      if(Password == confPassword){
        $.ajax({
            url:"/Qbonanza.com/php/signup.php",
            type:"post",
            data:{
                name:name,
                email:email,
                age:Age,
                pass:Password,
                conf:confPassword,
            },
            success:function(data, status){
                if(status=="success"){
                    if(data['status']){
                        console.log(data['message']);
                    }
                    else{
                        console.log(data['message']);
                        console.log(data)
                    }
                }
                else{
                    console.log("Error 404")
                }
            }
        })
      }
      else{
          console.log("Passwords dont match");
          console.log(Password)
          console.log(confPassword)
      }
  })
})