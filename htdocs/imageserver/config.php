<?php

$IMAGES_DIR = 'images';
$CACHE_DIR = 'cache';

$PROFILES = array(
  'thumbnail' => array(
    array('crop', 1 / 1),
    array('width', 200)
  ),
  'card' => array(
    array('crop', 800 / 300),
    array('width', 800),
  ),
  'banner' => array(
    array('crop', 1000 / 300),
    array('width', 1000)
  ),
  'opengraph' => array(
    array('crop', 1200 / 630)
  ),
  'original' => array(),
);

?>