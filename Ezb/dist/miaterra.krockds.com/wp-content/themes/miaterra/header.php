<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Miaterra
 */

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Miaterra</title>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/main.css">
    <link rel="shortcut icon" href="<?php the_field('site_icon');?>">
</head>
<body>
    <div id="wrapper" class="dark-menu">
        <header id="header">
            <div class="header__wrap">
                <div class="container">
                    <div class="header__content">
                        <div class="header__main">
                            <div class="header__logo logo">
                                <a href="<?php echo get_home_url(); ?>" class="logo__wrap">
                                    <img src="https://miaterra.krockds.com/wp-content/uploads/2021/10/Asset-1-1.png" alt="logo">
                                </a>
                            </div>
                            <div class="header__menu menu scrollto">
                                <?php
                                    wp_nav_menu( array(
                                        'menu'            => 'Header menu',             // (string) Название выводимого меню (указывается в админке при создании меню, приоритетнее 
                                                                                        // чем указанное местоположение theme_location - если указано, то параметр theme_location игнорируется)
                                        'container_class' => 'menu__wrap',
                                        'menu_class'      => 'menu__list',              // (string) class самого меню (ul тега)
                                        'echo'            => true,            // (boolean) Выводить на экран или возвращать для обработки
                                        'walker'          => '',              // (object) Класс собирающий меню. Default: new Walker_Nav_Menu
                                    ) );
                                ?>
								<div class="menu-item contact-menu-item"><a href="#form">Contact</a></div>
                                <!-- <a href="#" class="main-btn">Book a tour</a> -->
                                <div class="mob-social">
                                    <a target="_blank" class="mob-social__link" href="#"><i class="icon-facebook"></i></a>
                                    <a target="_blank" class="mob-social__link" href="#"><i class="icon-insta"></i></a>
                                </div>
                            </div>
                        </div>
                        <button class="burger">
                            <svg class="ham hamRotate ham1" viewBox="0 0 100 100">
                                <path
                                      class="line top"
                                      d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                                <path
                                      class="line middle"
                                      d="m 30,50 h 40" />
                                <path
                                      class="line bottom"
                                      d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                              </svg>
                            <!-- <span></span>
                            <span></span>
                            <span></span> -->
                        </button>
                    </div>
                </div>
            </div>
        </header>
