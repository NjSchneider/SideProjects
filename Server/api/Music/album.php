<?php
    class Album{
        public function fetch_all(){
          global $pdo;
      
          $query = $pdo->prepare("SELECT * FROM tracks WHERE AlbumID = 1");
          $query->execute();
      
          return $query->fetchAll();
        }      
      }



?>