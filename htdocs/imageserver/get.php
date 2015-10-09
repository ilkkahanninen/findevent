<?php

require 'config.php';
require 'lib/SimpleImage.php';

$MIME_TYPES = array(
  'jpg' => 'image/jpeg',
  'gif' => 'image/gif',
  'png' => 'image/png'
);

// Create cache if it does not exist
if (!file_exists($CACHE_DIR)) {
  mkdir( $CACHE_DIR );
}

$error = 'Undefined error';
$image = null;
$mime = null;

$profileName = isset($_GET['profile']) ? $_GET['profile'] : 'original';

if (isset($_GET['image']) && isset($PROFILES[$profileName])) {
  $profile = $PROFILES[$profileName];
  $source = $IMAGES_DIR . '/' . $_GET['image'];

  $max_width = isset($profile['width']) ? $profile['width'] : 100000;
  $max_height = isset($profile['height']) ? $profile['height'] : 100000;

  if (file_exists($source)) {

    $cached = $CACHE_DIR . '/' . $profileName . '_' . $_GET['image'];

    if (!file_exists($cached)) {
      $source_img = new SimpleImage();
      $source_img->load($source);
      
      if ($source_img->getWidth() > 1200) {
        $source_img->resizeToWidth(1200);
      }
      
      foreach ($profile as $action) {
        switch ($action[0]) {
          case 'crop':
            $source_img->crop($action[1]);
            break;
          case 'width':
            $source_img->resizeToWidth($action[1]);
            break;
          case 'height':
            $source_img->resizeToHeight($action[1]);
            break;
        }
      }
      $source_img->save($cached);
    }
    
    $image = file_get_contents( $cached );
    $path_info = pathinfo($cached);
    $mime = $MIME_TYPES[$path_info['extension']];
  } else {
    $error = "$source not found";
  }
}

if ($image != null) {
  header( 'content-type: ' . $mime );
  echo $image;
} else {
  echo 'Error (' . $error .')';
}

?>

