<?php 

header('Content-Type: text/xml');
echo '<?xml version = "1.0" encoding = "UTF-8" standalone = "yes" ?>';

//anytime you send somehting using a php file to a java file or xml it needs to be between tags
echo '<response>';//beggining tag
		
		$food = $_GET['food']; //To accept information in PHP. You can use get or post.
		$foodArray = array('tuna','chicken','beef','loaf','hum' );
		
		if(in_array($food,$foodArray))
			echo 'we do have'.$food.'!';
		elseif ($food == '' ) 
			echo "enter food you idiot!";
		else
			echo "we sell no".$food."!";

echo '</response>';//ending tag

?>