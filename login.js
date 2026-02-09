<script>
    let username=document.getElementById("uname").value;
    let password=document.getElementById("pass").value;
    let name=document.getElementById("name").value;
    let Pass=document.getElementById("password").value;
    function check()
    if(username===name)
    alert("Login Successful");
    document.getElementById("button").onclick='window.location.href="P1.html";' 
    else
    alert("Invalid Usename or Password");
</script>