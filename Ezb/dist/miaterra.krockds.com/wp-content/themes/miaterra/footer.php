<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Miaterra
 */

?>

	    <footer id="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-item main-footer">
                        <div class="main-footer__logo-wrap">
                            <a class="main-footer__logo" href="<?php echo get_home_url(); ?>"><img src="<?php echo get_template_directory_uri() ?>/images/icon/black-logo.svg" alt="logo"></a>
                            <div class="main-footer__logo-social">
                                <a target="_blank" href="#"><i class="icon-facebook"></i></a>
                                <a target="_blank" href="#"><i class="icon-insta"></i></a>
                            </div>
                        </div>
                        <?php
                            wp_nav_menu( array(
                                'menu'            => 'Footer menu',                         // (string) Название выводимого меню (указывается в админке при создании меню, приоритетнее 
                                                                                            // чем указанное местоположение theme_location - если указано, то параметр theme_location игнорируется)
                                'menu_class'      => 'main-footer__nav-menu',               // (string) class самого меню (ul тега)
                                'echo'            => true,                                  // (boolean) Выводить на экран или возвращать для обработки
                                'walker'          => '',                                    // (object) Класс собирающий меню. Default: new Walker_Nav_Menu
                            ) );
                        ?>
            <!--             <ul class="main-footer__nav-menu">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="tourPages.html">Egypt</a></li>
                            <li><a href="tourPages.html">Marocco</a></li>
                            <li><a href="tourPages.html">Turkey</a></li>
                            <li><a href="tourPages.html">Tunesia</a></li>
                        </ul> -->
                        <address class="main-footer__address">
                            <div class="main-footer__address-item">
                                <h3>Informations</h3>
                                <a class="address-link" href="mailto:info@miaterra.com">info@miaterra.com</a>
                                <a class="address-link" href="tel:+15147968377">(514) 796-8377</a>
                            </div>
                            <div class="main-footer__address-item">
                                <h3>Adresse</h3>
                                <p>1214 Rue Champêtre, Longueuil, QC J4N 1V1</p>
                            </div>
                        </address>
                    </div>
                    <div class="footer__item sub-footer">
                        <a href="<?php echo get_permalink( get_page_by_path( 'privacy-policy' ) );?>">Politique de confidentialité</a>
                        <a href="<?php echo get_permalink( get_page_by_path( 'coockies-policy' ) );?>">Cookies</a>
                        <p>© 2021  Miaterra Tout droits réservés</p>
                        <a target="_blank" href="https://adgorithme.com/">Propulsé par Adgorithme</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" defer></script>
    <script src="<?php echo get_template_directory_uri();?>/js/slick.min.js" defer></script>
    <script src="<?php echo get_template_directory_uri();?>/js/main.js" defer></script>
</body>
</html>