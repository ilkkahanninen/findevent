<?php

require 'config.php';

if (isset($_FILES['image']) && isset($_POST['id'])) {
  $image = $_FILES['image'];
  $id = $_POST['id'];
  
  $pathinfo = pathinfo($image['name']);
  $uploadFile = $IMAGES_DIR . '/' . $id . '.' . $pathinfo['extension'];

  if (move_uploaded_file($image['tmp_name'], $uploadFile)) {
    echo 'true';
  } else {
    echo 'false';
  }
}