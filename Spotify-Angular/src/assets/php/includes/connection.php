<?php

    try{
        $pdo = new PDO('mysql:host=localhost;dbname=music', 'tester', 'test');
    }catch(PDOException $e){
        echo $e->$php_errormsg;
        exit('Database error.');
    }

?>