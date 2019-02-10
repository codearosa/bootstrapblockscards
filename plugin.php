<?php
/**
 * Plugin Name: bootstrapblockscards
 * Plugin URI: https://github.com/ahmadawais/create-guten-block/
 * Description: bootstrapblockscards — is a Gutenberg plugin created via create-guten-block.
 * Author: mrahmadawais, maedahbatool
 * Author URI: https://AhmadAwais.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';


function codearosa_block_category_card( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'bootstrapblocks-cards',
				'title' => __( 'Bootstrap blocks - cards', 'bootstrapblockscards' ),
			),
		)
	);
}
add_filter( 'block_categories', 'codearosa_block_category_card', 10, 2);
