$(document).ready(function() {
  let name = $("#name").val();
  let email = $("#email").val();
  let Age = $("#Age").val();  
  let Password = $("#Password").val();
  let confPassword = $("#confPassword").val();
  $("#signup").click(function(){
      $.ajax({
          url:"/Qbonanza.com/php/signup.php",
          type:"post",
          data:{
              name:name,
              email:email,
              age:Age,
              pass:Password,
              conf:confPassword
          },
          success:function(data, status){
              if(status=="success"){
                  if(data.success){
                      alert("Success! YOu signed up successfully. Now you can login to get full access to the website");
                  }
              }
          }
      })
  })
})