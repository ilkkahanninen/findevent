<?php

$IMAGES_DIR = 'images';
$CACHE_DIR = 'cache';

$PROFILES = array(
  'thumbnail' => array(
    array('crop', 1 / 1),
    array('width', 200)
  ),
  'banner' => array(
    array('crop', 1000 / 400),
    array('width', 1000),
  ),
  'cover' => array(
    array('width', 1000)
  ),
  'opengraph' => array(
    array('crop', 1200 / 630)
  ),
  'original' => array(),
);

?>