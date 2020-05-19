<?php

try{
    $pdo = new PDO('mysql:host=localhost;dbname=music', 'root');
  } catch(PDOException $e){
    exit('Database error.');
  }

?>