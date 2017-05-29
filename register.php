<?php
  require('connect.php');
    if (isset($_POST['firstname']) && isset($_POST['password']) && isset($_POST['lastname']) && isset($_POST['email'])){
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
        $password = $_POST['password'];
 
        $query = "INSERT INTO `user` (firstname,lastname,email,password) VALUES ('$firstname','$lastname','' '$password', '$email')";
        $result = mysql_query($query);
        if($result){
            print "User Created Successfully.";
            print "<a href = index.html'> Go to Home</a> "
        }
    }

    $email = $_POST['email'];

    $to = "ghassan.ansari@gmail.com";
    $subject = "New Email Address for Mailing List";
    $header = "From: $email\n";

    $message = " A Visitor to your site Email Address: $email"

   //$user = "$email";
    //$subject = "Thank You";
    //$userheader = "From: ghassan.ansari@gmail.com";

    //$usermessage = "Thank you for subscribing to our mailing list";
    //mail($to,$subject,$message,$headers);
  

    ?>