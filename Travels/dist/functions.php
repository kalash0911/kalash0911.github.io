<?php
/**
 * krock functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package krock
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

if ( ! function_exists( 'krock_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function krock_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on krock, use a find and replace
		 * to change 'krock' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'krock', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'krock' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'krock_custom_background_args',
				array(
					'default-color' => 'ffffff',
					'default-image' => '',
				)
			)
		);

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'krock_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function krock_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'krock_content_width', 640 );
}
add_action( 'after_setup_theme', 'krock_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function krock_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'krock' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'krock' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'krock_widgets_init' );

add_action( 'init', 'true_jquery_register' );
 
function true_jquery_register() {
	if ( !is_admin() ) {
		wp_deregister_script( 'jquery' );
		wp_register_script( 'jquery', ( get_template_directory_uri() . '/js/jquery-3.6.0.min.js' ), false, null, true );
		wp_enqueue_script( 'jquery' );
	}
}

/**
 * Enqueue scripts and styles.
 */
function krock_scripts() {
	wp_enqueue_style( 'krock-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'krock-style', 'rtl', 'replace' );
	

	wp_enqueue_script( 'krock-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'krock-swiper-js', get_template_directory_uri() . '/js/swiper-bundle.min.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'krock-main-js', get_template_directory_uri() . '/js/main.js', array(), _S_VERSION, true );

	wp_enqueue_style( 'krock-swiper-css', 'https://unpkg.com/swiper/swiper-bundle.min.css' );
	//wp_enqueue_style( 'krock-style-main', get_template_directory_uri() . '/css/main.css' );
	//wp_enqueue_style( 'krock-style-main-map', get_template_directory_uri() . '/css/main.css.map' );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'krock_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}


// Our custom post type function
function create_posttype() {
 
    register_post_type( 'projects',
    // CPT Options
        array(
            'labels' => array(
                'name' => __( 'Progects' ),
                'singular_name' => __( 'Progects' )
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'projects'),
            'show_in_rest' => true,
			'supports' => array('title','editor','thumbnail','excerpt')
        )
    );
}
// Hooking up our function to theme setup
add_action( 'init', 'create_posttype' );

// Our custom post type function
function create_blog_posttype() {
 
    register_post_type( 'blog',
    // CPT Options
        array(
            'labels' => array(
                'name' => __( 'Blog' ),
                'singular_name' => __( 'Blog' )
            ),
            'public' => true,
            'has_archive' => true,
            'rewrite' => array('slug' => 'blogPosts'),
            'show_in_rest' => true,
			'supports' => array('title','editor','thumbnail','excerpt')
        )
    );
}
// Hooking up our function to theme setup
add_action( 'init', 'create_blog_posttype' );

// Remove p tags from category description
remove_filter('term_description','wpautop');

add_filter( 'the_content', 'wti_remove_autop_for_image', 0 );

function wti_remove_autop_for_image( $content )
{
     global $post;

     // Check for single page and image post type and remove
          remove_filter('the_content', 'wpautop');

     return $content;
}
