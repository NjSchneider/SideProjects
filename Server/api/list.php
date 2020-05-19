<?php    
    include('connection.php');
        
    $sql = "SELECT * FROM tracks";
    
    $result = $pdo->query($sql);

    $json_array = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)){
        $json_array[] = $row;
    }

    $json = json_encode($json_array);    

    echo $json;
?>

