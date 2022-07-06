function getCertifs()
    {
        req = "SELECT name,src,alt,date
        FROM  Certifications
        ORDER BY id_certification DESC";
        
        return $this -> queryFetchAll($req);
    }
    
