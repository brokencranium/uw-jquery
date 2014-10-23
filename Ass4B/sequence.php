<?php
  // grab "seq" from url params
  $seq = isset( $_GET['seq'] ) ? $_GET['seq'] : 0;
  $cbFunc = isset( $_GET['callback'] ) ? $_GET['callback'] : "cbFunc";

  // sanitize input
  $seq = intval( $seq );
  $cbFunc = preg_replace( "/[^A-Za-z0-9\_]+/", "", $cbFunc );

  // random pause to encourage out of sequence behavior  
  usleep( rand( 100000, 500000 ) );

  // indicate JSON data type in HTTP response header
  header('Content-type: application/json');

  // dump jsonp response
  echo "{$cbFunc}(" . 
       json_encode( array( 'seq' => $seq ) ) .
       ")";
?>
