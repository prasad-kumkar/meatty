<?php
    
    //$dbhost = "escapevr.cun65xewzaz2.ap-south-1.rds.amazonaws.com:3306";
    //$dbname = "escapevr";

    $dbhost = "localhost:82";
    $dbname = "meatty";
    $user   = "admin";
    $pass   = "Ve2VkHq8";

    $auth = new Auth($dbhost, $dbname, $user, $pass);
    $auth->connect();

    
    if(isset($_POST["username"]) && !empty($_POST["username"]) &&
        isset($_POST["email"]) && !empty($_POST["username"]) &&
        isset($_POST["password"]) && !empty($_POST["username"]) &&
        isset($_POST["confPassword"]) && !empty($_POST["username"])){

        $auth->Register($_POST["username"], $_POST["email"], $_POST["password"], $_POST["confPassword"]);

    }
    else if (isset($_POST["username"]) && !empty($_POST["username"]) &&
        isset($_POST["password"]) && !empty($_POST["password"])){
    
           $auth->Login($_POST["username"], $_POST["password"]);
        }
    
    $user = "prasad";
    $pass = "johnsmith";
    $auth->Login($user, $pass);
    //$auth->Register("test3", "test3@gmail.com", "dodo", "dodo");


    class Auth{
        private $dbhost;
        private $dbname;
        private $user;
        private $pass;
        private $connection;
        private $resultObj;

        function __construct($dbhost, $dbname, $user, $pass){
            $this->dbhost = $dbhost;
            $this->dbname = $dbname;
            $this->user = $user;
            $this->pass = $pass;
            $this->connection = null;
            $this->resultObj = null;
        }

        public function connect(){
            $this->connection = new mysqli($this->dbhost, $this->user, $this->pass, $this->dbname);
            echo "Connection successful";
            //If connection fails
            if ($this->connection->connect_errno){
                exit("Error: Database connection failed".$this->connection->connect_error);
            }
            return $this->connection;
        }

        public function Login($username, $password){
            $query = "SELECT login_id FROM login WHERE username=? AND password=?";

            $this->resultObj = $this->connection->prepare($query);

            $this->resultObj->bind_param("ss", $username, sha1($password)); #encrypted password
            $this->resultObj->execute();

            $this->resultObj->bind_result($id, $username);
            $this->resultObj->store_result();

            #print_r($this->resultObj);
            if ($this->resultObj->num_rows >0){
                #echo "Welcome back ".$this->resultObj['username'].PHP_EOL;
                exit("Verification Successful !");
            }

            exit("Error: Username and/or Password is invalid !");
            
        }
        public function RegisterCustomer(
            $name, $password, $confPassword, $mobile, 
            $pin, $state, $city, $street, $door,
            $validatePass=true){
            if($validatePass){
                $uppercase = preg_match('@[A-Z]@', $password);
                $lowercase = preg_match('@[a-z]@', $password);
                $number    = preg_match('@[0-9]@', $password);
                $specialChars = preg_match('@[^\w]@', $password);

                if(!$uppercase || !$lowercase || !$number || !$specialChars || strlen($password) < 8) {
                    echo 'Password should be at least 8 characters in length and should include at least one upper case letter, one number, and one special character.';
                }
                else{
                    echo 'Strong password.';
                }
            }

            if ($password != $confPassword){
                exit("Error: Password and Confirm Password does not match.");
            }

            $query = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
            $this->resultObj = $this->connection->prepare($query);

            $this->resultObj->bind_param("sss", $username, sha1($password), $email); #encrypted password
            $this->resultObj->execute();

            if ($this->resultObj->error){
                echo "Error: ";
                exit($this->resultObj->error);
            }

            exit("Registered Successfully!");


            // Validate Password: Must contain 1 Uppercase, 1 Lowercase, 1 Number, 1 SpecialChar
            /*

            $checkQuery = "SELECT username, email FROM users WHERE (username=?) OR (email=?)";
            $this->resultObj = $this->connection->prepare($checkQuery);
            $this->resultObj->bind_param("ss", $username, $email); 
            $this->resultObj->execute();
            print_r($this->resultObj);
            $this->resultObj->bind_result($username, $email);
            $this->resultObj->store_result();

            if ($this->resultObj->error_list >0){
                exit("Email/username already exists, Please try different Email/username.");
            }
            else{
                $query = "INSERT INTO users (username, password, email) VALUES (?, ?, ?)";
                $this->connection->close();
                $this->connect();
                $this->resultObj = $this->connection->prepare($query);

                $this->resultObj->bind_param("sss", $username, sha1($password), $email); #encrypted password
                $this->resultObj->execute();
                echo("Registered Successfully!");*/
            }
            
        }

        function __destruct(){
            $this->connection->close();
            $this->resultObj->close();
            echo " Connection closed".PHP_EOL;
        }  
?>
