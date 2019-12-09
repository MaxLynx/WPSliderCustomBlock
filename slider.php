<?php

/**
 * Plugin Name: Slider
 * Author: MaxLynx
 * Version: 1.0
 */

 function load() {
     wp_enqueue_script(
         'slider-handle',
         plugin_dir_url(__FILE__) . 'slider.js',
         array('wp-blocks', 'wp-i18n', 'wp-editor'),
         $in_footer = true
     );
 }

 add_action('enqueue_block_assets', 'load');