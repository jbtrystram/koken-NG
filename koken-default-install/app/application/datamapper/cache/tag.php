<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 
$cache = array (
  'table' => 'koken_tags',
  'fields' => 
  array (
    0 => 'id',
    1 => 'name',
    2 => 'created_on',
    3 => 'modified_on',
    4 => 'last_used',
    5 => 'album_count',
    6 => 'text_count',
    7 => 'content_count',
  ),
  'validation' => 
  array (
    'id' => 
    array (
      'field' => 'id',
      'rules' => 
      array (
        0 => 'integer',
      ),
    ),
    'name' => 
    array (
      'field' => 'name',
      'rules' => 
      array (
      ),
    ),
    'created_on' => 
    array (
      'field' => 'created_on',
      'rules' => 
      array (
      ),
    ),
    'modified_on' => 
    array (
      'field' => 'modified_on',
      'rules' => 
      array (
      ),
    ),
    'last_used' => 
    array (
      'field' => 'last_used',
      'rules' => 
      array (
      ),
    ),
    'album_count' => 
    array (
      'field' => 'album_count',
      'rules' => 
      array (
      ),
    ),
    'text_count' => 
    array (
      'field' => 'text_count',
      'rules' => 
      array (
      ),
    ),
    'content_count' => 
    array (
      'field' => 'content_count',
      'rules' => 
      array (
      ),
    ),
    'content' => 
    array (
      'field' => 'content',
      'rules' => 
      array (
      ),
    ),
    'album' => 
    array (
      'field' => 'album',
      'rules' => 
      array (
      ),
    ),
    'text' => 
    array (
      'field' => 'text',
      'rules' => 
      array (
      ),
    ),
  ),
  'has_one' => 
  array (
  ),
  'has_many' => 
  array (
    'content' => 
    array (
      'class' => 'content',
      'other_field' => 'tag',
      'join_self_as' => 'tag',
      'join_other_as' => 'content',
      'join_table' => '',
      'reciprocal' => false,
      'auto_populate' => NULL,
      'cascade_delete' => true,
    ),
    'album' => 
    array (
      'class' => 'album',
      'other_field' => 'tag',
      'join_self_as' => 'tag',
      'join_other_as' => 'album',
      'join_table' => '',
      'reciprocal' => false,
      'auto_populate' => NULL,
      'cascade_delete' => true,
    ),
    'text' => 
    array (
      'class' => 'text',
      'other_field' => 'tag',
      'join_self_as' => 'tag',
      'join_other_as' => 'text',
      'join_table' => '',
      'reciprocal' => false,
      'auto_populate' => NULL,
      'cascade_delete' => true,
    ),
  ),
  '_field_tracking' => 
  array (
    'get_rules' => 
    array (
    ),
    'matches' => 
    array (
    ),
    'intval' => 
    array (
      0 => 'id',
    ),
  ),
);