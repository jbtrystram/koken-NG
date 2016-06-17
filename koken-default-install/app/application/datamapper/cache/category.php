<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed'); 
$cache = array (
  'table' => 'koken_categories',
  'fields' => 
  array (
    0 => 'id',
    1 => 'title',
    2 => 'slug',
    3 => 'album_count',
    4 => 'text_count',
    5 => 'content_count',
  ),
  'validation' => 
  array (
    'title' => 
    array (
      'label' => 'Title',
      'rules' => 
      array (
        0 => 'required',
      ),
      'field' => 'title',
    ),
    'slug' => 
    array (
      'rules' => 
      array (
        0 => 'slug',
        1 => 'required',
      ),
      'field' => 'slug',
    ),
    'id' => 
    array (
      'field' => 'id',
      'rules' => 
      array (
        0 => 'integer',
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
      'other_field' => 'category',
      'join_self_as' => 'category',
      'join_other_as' => 'content',
      'join_table' => '',
      'reciprocal' => false,
      'auto_populate' => NULL,
      'cascade_delete' => true,
    ),
    'album' => 
    array (
      'class' => 'album',
      'other_field' => 'category',
      'join_self_as' => 'category',
      'join_other_as' => 'album',
      'join_table' => '',
      'reciprocal' => false,
      'auto_populate' => NULL,
      'cascade_delete' => true,
    ),
    'text' => 
    array (
      'class' => 'text',
      'other_field' => 'category',
      'join_self_as' => 'category',
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