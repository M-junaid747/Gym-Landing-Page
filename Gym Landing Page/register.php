<?php
$servername = "localhost";
$username = "root";
$password = ""; // your database password
$dbname = "fitness_gym";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // Hash the password
    $email = $_POST['email'];
    $address = $_POST['address'];
    $plan = $_POST['plan'];
    $terms = isset($_POST['terms']) ? 1 : 0;

    $sql = "INSERT INTO registrations (name, password, email, address, plan, terms)
            VALUES ('$name', '$password', '$email', '$address', '$plan', '$terms')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
