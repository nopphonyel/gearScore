<?php
    
    session_start();
    $username = $_POST["uname"];
    $password = $_POST["psw"];
    
    if(($username == "admin") && ($password == "4321")){ 
        $_SESSION["Status"] = "ADMIN";
        session_write_close();
        header('Location: data-collect-form.html');    
    }else{
        echo "<script>alert('Username or Password is incorrect.');
                window.location.href='login-page.html';
                </script>";
        
    }
    


?>