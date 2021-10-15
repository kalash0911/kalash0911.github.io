<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Miaterra
 */

get_header();
?>

	        <main id="main">
                <section class="main">
                <div class="main-slider">

                    <?php
                    $slide_1 = get_field('slide_1');	
                    
                    if( $slide_1 ): ?>

                        <div class="main-slider__item">
                            <img src="<?php echo $slide_1['slide_img']; ?>" alt="img">
                            <div class="container">
                                <div class="main-slider__text-wrap">
                                    <p><?php echo $slide_1['top_title']; ?></p>
                                    <h1><?php echo $slide_1['main_title']; ?></h1>
                                    <p><?php echo $slide_1['bot_title']; ?></p>
                                </div>
                                <a class="main-btn" href="<?php the_field('btn_url');?>"><?php the_field('btn_text');?></a>
                            </div>
                        </div>

                    <?php endif; ?>

                    <?php
                    $slide_2 = get_field('slide_2');	
                    
                    if( $slide_2 ): ?>

                        <div class="main-slider__item">
                            <img src="<?php echo $slide_2['slide_img']; ?>" alt="img">
                            <div class="container">
                                <div class="main-slider__text-wrap">
                                    <p><?php echo $slide_2['top_title']; ?></p>
                                    <h1><?php echo $slide_2['main_title']; ?></h1>
                                    <p><?php echo $slide_2['bot_title']; ?></p>
                                </div>
                                <a class="main-btn" href="<?php the_field('btn_url');?>"><?php the_field('btn_text');?></a>
                            </div>
                        </div>

                    <?php endif; ?>

                    <?php
                    $slide_3 = get_field('slide_3');	
                    
                    if( $slide_3 ): ?>

                        <div class="main-slider__item">
                            <img src="<?php echo $slide_3['slide_img']; ?>" alt="img">
                            <div class="container">
                                <div class="main-slider__text-wrap">
                                    <p><?php echo $slide_3['top_title']; ?></p>
                                    <h1><?php echo $slide_3['main_title']; ?></h1>
                                    <p><?php echo $slide_3['bot_title']; ?></p>
                                </div>
                                <a class="main-btn" href="<?php the_field('btn_url');?>"><?php the_field('btn_text');?></a>
                            </div>
                        </div>

                    <?php endif; ?>

                    <?php
                    $slide_4 = get_field('slide_4');	
                    
                    if( $slide_4 ): ?>

                        <div class="main-slider__item">
                            <img src="<?php echo $slide_4['slide_img']; ?>" alt="img">
                            <div class="container">
                                <div class="main-slider__text-wrap">
                                    <p><?php echo $slide_4['top_title']; ?></p>
                                    <h1><?php echo $slide_4['main_title']; ?></h1>
                                    <p><?php echo $slide_4['bot_title']; ?></p>
                                </div>
                                <a class="main-btn" href="<?php the_field('btn_url');?>"><?php the_field('btn_text');?></a>
                            </div>
                        </div>

                    <?php endif; ?>

                </div>
            </section>
            <section class="cities">
                <div class="container">
                    <div class="cities-content">
                        <div class="cities-wrap">

                            <?php
                            $element1 = get_field('element1');	
                            
                            if( $element1 ): ?>

                                <div class="cities__item">
                                    <div class="cities__item__icon-wrap">
                                        <img src="<?php echo $element1['element_img']; ?>" alt="icon-img">
                                    </div>
                                    <div class="cities__item__text">
                                        <span><?php echo $element1['element_title']; ?></span>
                                        <p><?php echo $element1['element_description']; ?></p>
                                    </div>
                                </div>
                            <?php endif; ?>

                            <?php
                            $element2 = get_field('element2');	
                            
                            if( $element2 ): ?>

                                <div class="cities__item">
                                    <div class="cities__item__icon-wrap">
                                        <img src="<?php echo $element2['element_img']; ?>" alt="icon-img">
                                    </div>
                                    <div class="cities__item__text">
                                        <span><?php echo $element2['element_title']; ?></span>
                                        <p><?php echo $element2['element_description']; ?></p>
                                    </div>
                                </div>
                            <?php endif; ?>

                            <?php
                            $element3 = get_field('element3');	
                            
                            if( $element3 ): ?>

                                <div class="cities__item">
                                    <div class="cities__item__icon-wrap">
                                        <img src="<?php echo $element3['element_img']; ?>" alt="icon-img">
                                    </div>
                                    <div class="cities__item__text">
                                        <span><?php echo $element3['element_title']; ?></span>
                                        <p><?php echo $element3['element_description']; ?></p>
                                    </div>
                                </div>
                            <?php endif; ?>

                            <?php
                            $element4 = get_field('element4');	
                            
                            if( $element4 ): ?>

                                <div class="cities__item">
                                    <div class="cities__item__icon-wrap">
                                        <img src="<?php echo $element4['element_img']; ?>" alt="icon-img">
                                    </div>
                                    <div class="cities__item__text">
                                        <span><?php echo $element4['element_title']; ?></span>
                                        <p><?php echo $element4['element_description']; ?></p>
                                    </div>
                                </div>
                            <?php endif; ?>

                        </div>
                    </div>
                </div>
            </section>
            <section class="about">
                <div class="container">
                    <div class="about-content">
                        <div class="about__text-blok">
                            <h2><?php the_field('about_title');?></h2>
                            <p><?php the_field('about_description');?></p>
                        </div>
                        <div class="about__img-blok">
                            <picture class="about__img-wrap">
                                <img src="<?php the_field('about_img');?>" alt="img">
                            </picture>
                            <div class="about__comment-wrap comment-about">
                                <div class="comment-about__title-container">
                                    <div class="comment-about__img-wrap">
                                        <img src="<?php the_field('about_img_coment');?>" alt="avatar-img">
                                    </div>
                                    <div class="comment-about__title-wrap">
                                        <span><?php the_field('about_title_coment');?></span>
                                        <p><?php the_field('about_description_coment');?></p>
                                    </div>
                                </div>
                                <div class="comment-about__stars-container">
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                    <i class="icon-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="tours">
                <div class="container">
                    <div class="tours-content">
                        <h2><?php the_field('tour_main_title');?></h2>
                        <div class="tours__item-wrap">

                            <?php
                                $tours1 = get_field('tours1');	
                            
                                if( $tours1 ): ?>

                                <div class="tours__item">
                                    <picture class="tours__item__img-wrap">
                                        <img src="<?php echo $tours1['tours_img']; ?>" alt="img">
                                    </picture>
                                    <div class="tours__item__text-wrap">
                                        <div class="tours__item__title">
                                            <span><?php echo $tours1['tours_title']; ?></span>
                                            <p><?php echo $tours1['tours_description']; ?></p>
                                        </div>
                                        <a class="line-btn" href="<?php echo $tours1['tours_btn_link']; ?>">En savoir plus</a>
                                    </div>
                                </div>
                            <?php endif; ?>

                            <?php
                                $tours2 = get_field('tours2');	
                            
                                if( $tours2 ): ?>

                                <div class="tours__item">
                                <picture class="tours__item__img-wrap">
                                        <img src="<?php echo $tours2['tours_img']; ?>" alt="img">
                                    </picture>
                                    <div class="tours__item__text-wrap">
                                        <div class="tours__item__title">
                                            <span><?php echo $tours2['tours_title']; ?></span>
                                            <p><?php echo $tours2['tours_description']; ?></p>
                                        </div>
                                        <a class="line-btn" href="<?php echo $tours2['tours_btn_link']; ?>">En savoir plus</a>
                                    </div>
                                </div>
                            <?php endif; ?>

                            <?php
                                $tours3 = get_field('tours3');	
                            
                                if( $tours3 ): ?>

                                <div class="tours__item">
                                <picture class="tours__item__img-wrap">
                                        <img src="<?php echo $tours3['tours_img']; ?>" alt="img">
                                    </picture>
                                    <div class="tours__item__text-wrap">
                                        <div class="tours__item__title">
                                            <span><?php echo $tours3['tours_title']; ?></span>
                                            <p><?php echo $tours3['tours_description']; ?></p>
                                        </div>
                                        <a class="line-btn" href="<?php echo $tours3['tours_btn_link']; ?>">En savoir plus</a>
                                    </div>
                                </div>
                            <?php endif; ?>

                            <?php
                                $tours4 = get_field('tours4');	
                            
                                if( $tours4 ): ?>

                                <div class="tours__item">
                                    <picture class="tours__item__img-wrap">
                                        <img src="<?php echo $tours4['tours_img']; ?>" alt="img">
                                    </picture>
                                    <div class="tours__item__text-wrap">
                                        <div class="tours__item__title">
                                            <span><?php echo $tours4['tours_title']; ?></span>
                                            <p><?php echo $tours4['tours_description']; ?></p>
                                        </div>
                                        <a class="line-btn" href="<?php echo $tours4['tours_btn_link']; ?>">En savoir plus</a>
                                    </div>
                                </div>
                            <?php endif; ?>
                            
                        </div>
                        <a class="sec-btn" href="<?php the_field('tour_btn_link');?>"><?php the_field('tour_btn_text');?></a>
                    </div>
                </div>
            </section>
            <section class="steps">
                <div class="container">
                    <div class="steps-content">
                        <h2><?php the_field('steps_main_title');?></h2>
                        <p class="steps__mai-sub-title"><?php the_field('steps_subtitle');?></p>
                        <ol class="steps__item-wrap">

                            <?php
                                $steps1 = get_field('steps1');	
                            
                                if( $steps1 ): ?>

                                <li class="steps__item">
                                    <div class="steps__item-icon">
                                        <i class="icon-choice"></i>
                                    </div>
                                    <div class="steps__item-title">
                                        <span><?php echo $steps1['steps_item_title']; ?></span>
                                        <p><?php echo $steps1['steps_item_description']; ?></p>
                                    </div>
                                </li>
                            <?php endif; ?>

                            <?php
                                $steps2 = get_field('steps2');	
                            
                                if( $steps2 ): ?>

                                <li class="steps__item">
                                    <div class="steps__item-icon">
                                        <i class="icon-email"></i>
                                    </div>
                                    <div class="steps__item-title">
                                        <span><?php echo $steps2['steps_item_title']; ?></span>
                                        <p><?php echo $steps2['steps_item_description']; ?></p>
                                    </div>
                                </li>
                            <?php endif; ?>

                            <?php
                                $steps3 = get_field('steps3');	
                            
                                if( $steps3 ): ?>

                                <li class="steps__item">
                                    <div class="steps__item-icon">
                                        <i class="icon-pay"></i>
                                    </div>
                                    <div class="steps__item-title">
                                        <span><?php echo $steps3['steps_item_title']; ?></span>
                                        <p><?php echo $steps3['steps_item_description']; ?></p>
                                    </div>
                                </li>
                            <?php endif; ?>

                            <?php
                                $steps4 = get_field('steps4');	
                            
                                if( $steps4 ): ?>

                                <li class="steps__item">
                                    <div class="steps__item-icon">
                                        <i class="icon-documents"></i>
                                    </div>
                                    <div class="steps__item-title">
                                        <span><?php echo $steps4['steps_item_title']; ?></span>
                                        <p><?php echo $steps4['steps_item_description']; ?></p>
                                    </div>
                                </li>
                            <?php endif; ?>

                            <?php
                                $steps5 = get_field('steps5');	
                            
                                if( $steps5 ): ?>

                                <li class="steps__item">
                                    <div class="steps__item-icon">
                                        <i class="icon-travel"></i>
                                    </div>
                                    <div class="steps__item-title">
                                        <span><?php echo $steps5['steps_item_title']; ?></span>
                                        <p><?php echo $steps5['steps_item_description']; ?></p>
                                    </div>
                                </li>
                            <?php endif; ?>
 
                        </ol>
                        <a class="main-btn" href="<?php the_field('steps_btn_link');?>"><?php the_field('steps_btn_text');?></a>
                    </div>
                </div>
            </section>
            <section class="gallery main-gallery">
                <div class="container">
                    <div class="gallery-content">
                        <h2><?php the_field('gallery_main_title');?></h2>
                        <p class="gallery__main-sub-title"><?php the_field('gallery_subtitle');?></p>
                        <div class="gallery__item-conatiner">										
                	    </div>
                    </div>
                </div>
            </section>
            <section class="reviews">
                <div class="container">
                    <div class="reviews-content">
                        <h2><?php the_field('reviews_main_title');?></h2>
                        <div class="reviews__item-wrap reviews_slider">

                            <?php
                                $reviews1 = get_field('reviews1');	
                            
                                if( $reviews1 ): ?>

                                <div class="reviews__item">
                                    <picture class="reviews__item__img-wrap">
                                        <img src="<?php echo $reviews1['reviews_main_img']; ?>" alt="img">
                                    </picture>
                                    <div class="reviews__item__comment comment-about">
                                        <div class="comment-about__title-container">
                                            <div class="comment-about__img-wrap">
                                                <img src="<?php echo $reviews1['reviews_img']; ?>" alt="avatar-img">
                                            </div>
                                            <div class="comment-about__title-wrap">
                                                <span><?php echo $reviews1['reviews_title']; ?></span>
                                                <p><?php echo $reviews1['reviews_subtitle']; ?></p>
                                            </div>
                                        </div>
                                        <div class="comment-about__stars-container">
                                            <p><?php echo $reviews1['reviews_description']; ?> </p>
                                        </div>
                                    </div>
                                </div>
                            <?php endif; ?>

                            <?php
                                $reviews2 = get_field('reviews2');	
                            
                                if( $reviews2 ): ?>

                                <div class="reviews__item">
                                    <picture class="reviews__item__img-wrap">
                                        <img src="<?php echo $reviews2['reviews_main_img']; ?>" alt="img">
                                    </picture>
                                    <div class="reviews__item__comment comment-about">
                                        <div class="comment-about__title-container">
                                            <div class="comment-about__img-wrap">
                                                <img src="<?php echo $reviews2['reviews_img']; ?>" alt="avatar-img">
                                            </div>
                                            <div class="comment-about__title-wrap">
                                                <span><?php echo $reviews2['reviews_title']; ?></span>
                                                <p><?php echo $reviews2['reviews_subtitle']; ?></p>
                                            </div>
                                        </div>
                                        <div class="comment-about__stars-container">
                                            <p><?php echo $reviews2['reviews_description']; ?> </p>
                                        </div>
                                    </div>
                                </div>
                            <?php endif; ?>

                            <?php
                                $reviews3 = get_field('reviews3');	
                            
                                if( $reviews3 ): ?>

                                <div class="reviews__item">
                                    <picture class="reviews__item__img-wrap">
                                        <img src="<?php echo $reviews3['reviews_main_img']; ?>" alt="img">
                                    </picture>
                                    <div class="reviews__item__comment comment-about">
                                        <div class="comment-about__title-container">
                                            <div class="comment-about__img-wrap">
                                                <img src="<?php echo $reviews3['reviews_img']; ?>" alt="avatar-img">
                                            </div>
                                            <div class="comment-about__title-wrap">
                                                <span><?php echo $reviews3['reviews_title']; ?></span>
                                                <p><?php echo $reviews3['reviews_subtitle']; ?></p>
                                            </div>
                                        </div>
                                        <div class="comment-about__stars-container">
                                            <p><?php echo $reviews3['reviews_description']; ?> </p>
                                        </div>
                                    </div>
                                </div>
                            <?php endif; ?>                           
                        
                        </div>
                    </div>
                </div>
            </section>
            <section id="form" class="form">
                <div class="container">
                    <div class="form-content">
                        <div class="form__teitle">
                            <h2>Do you want to pick up a tour quickly
                                and get the hottest qoute?</h2>
                            <p>Leave a request and one of our experts will help you!</p>
                        </div>

                        <?php echo do_shortcode('[contact-form-7 id="1680" title="Main contact form"]') ?>

                    </div>
                </div>
            </section>
        </main>

<?php

get_footer();
