<body>
<?php

    header('Content-Type: application/json');
        $db = mysqli_connect("localhost","tester","test","music");
    
        $query = "SELECT * FROM tracks";
        $result = mysqli_query($db, $query);
        
        $tracks = array();
        while($row = $result->fetch_array()){
            $tracks[] = $row;
        }

        echo json_encode($tracks);

?>
</body>