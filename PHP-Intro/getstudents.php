<?php
//associative array 
//key/values pares are seperated by commas
// keys and valuse are seperated by =>
//keys must be strings

//var data = [];
//PHP $data = [];
//var student = {};
$output = [];
$data = [];

$student = [
  'id'=>2,
  'name'=>'Matthew',
  'course'=>'avocado',
  'grade'=>rand(0,100)
];
// print_r($student); //needs to be a string so will error at this point. unless you _r
array_push($data, $student);

$output['success'] = true; //JS would be like adding to an object array
$output['data'] = $data;

$json_output = json_encode($output);
print($json_output);
?>