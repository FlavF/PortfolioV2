<?php

class ITModel extends ModelManager
{
    
     public function getIt()
    {
        $req = "SELECT start_date, end_date, name, location,description, type  
        FROM CV_IT
        ORDER BY id_about DESC";

        return $this -> queryFetchAll($req);
    }
    



}