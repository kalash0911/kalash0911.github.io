<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package alexandr
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="wrapper">
        <header id="header">
            <div class="container">
                <div class="header-content">
                    <div class="header-logo">
                        <a class="logo-link" href="<?php echo home_url(); ?>">
                            <img class="header-logo-img" src="https://alexanderhobbs.com/wp-content/uploads/2021/05/Asset 7.svg" alt="logo-img">
                            <h5 class="logo-text">Alexander Hobbs</h5>
                        </a>
                    </div>
                    <nav class="header-nav">
                        <div class="mob-menu-wrap">
                            <h3 class="mob-menu-title">Menu</h3>
                        </div>
                        <ul class="nav-wrap">
                            <li class="nav-item"><a class="nav-link" href="<?php echo home_url(); ?>">Main</a></li>
                            <li class="nav-item"><a class="nav-link" href="#blog">Blogs</a></li>
                            <li class="nav-item"><a data-goto=".page-contacts" class="nav-link" href="#page-contacts">Contacts</a></li>
                        </ul>
                        <div class="mob-social-icon">
                            <a href="https://www.instagram.com/al_hobbsy/?hl=en" class="mob-social-link" target="_blank" class="mob-social-link"><i class="icon-instagram"></i></a>
                            <a href="https://www.facebook.com/profile.php?id=60505882" target="_blank" class="mob-social-link"><i class="icon-facebook"></i></a>
                            <a href="https://www.linkedin.com/in/alexander-hobbs-54b1ab41?originalSubdomain=ch" target="_blank" class="mob-social-link"><i class="icon-linkedin"></i></a>
                        </div>
                    </nav>
                    <div class="burger">
                        <span class="burger-item item-top"></span>
                        <span class="burger-item item-center"></span>
                        <span class="burger-item item-bottom"></span>
                    </div>
                </div>
            </div>
         </header>
        
