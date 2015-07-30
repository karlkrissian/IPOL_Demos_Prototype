<?php

if ( !empty( $_FILES ) ) {

  $filename = $_FILES['file']['name'];
  $demo_id = $_POST['demo_id'];
  $destination = __DIR__ . '/img/demos/'. $demo_id . '/uploaded/' . $filename;
  move_uploaded_file( $_FILES['file']['tmp_name'] , $destination );

} else {

  echo 'No files';

}

?>