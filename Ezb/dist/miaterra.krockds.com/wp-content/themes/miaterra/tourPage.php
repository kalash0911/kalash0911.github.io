<?php
    /*
        Template Name: Tours Page Template
    */
?>

<?php get_header('page'); ?>

<div class="modal-img">
    <a href="#" class="modal-img__overflow"></a>
    <div class="modal-img__img-wrap">
        <img src="" alt="img">
        <a href="#" class="modal-btn-close">
            <span></span>
            <span></span>
        </a>
    </div>
</div>

<main id="main">
    <section class="main-pages">
        <div class="main-pages__text-bg">
            <p><?php the_field('main_title');?></p>
        </div>
        <div class="container">
            <div class="main-pages-content">
                <h1><?php the_field('main_title');?></h1>
            </div>
        </div>
        <picture class="main-pages__img-wrap">
            <img src="<?php the_field('main_img');?>" alt="img">
        </picture>
    </section>
    <section class="text-pages">
        <div class="container">
            <div class="text-pages-content">
                <div class="text-pages__text-wrap">
                    <p><?php the_field('main_description');?></p>
                </div>
                <div class="text-pages__btn-wrap">
                    <a class="sec-btn" href="<?php the_field('white_btn_link');?>"><?php the_field('white_btn');?></a>
                    <a class="main-btn" href="<?php the_field('red_btn_link');?>" download ><?php the_field('red_btn');?></a>
                </div>
            </div>
        </div>
    </section>
    <section class="trip">
        <div class="container">
            <div class="trip-content">
                <h2><?php the_field('trip_main_title');?></h2>
                <div class="trip__item-wrap">
                    <picture class="trip__img-wrap">
                        <img src="<?php the_field('trip_main_img');?>" alt="img">
                    </picture>
                    <div class="trip__text-wrap">

                        <?php
                            $day_1 = get_field('day_1');	
                            
                            if( $day_1 ): ?>

                            <ul><?php echo $day_1['day_title']; ?>
                                <?php echo $day_1['day_description']; ?>
                            </ul>
                        <?php endif; ?>

                        <?php
                            $day_2 = get_field('day_2');	
                            
                            if( $day_2 ): ?>

                            <ul><?php echo $day_2['day_title']; ?>
                                <?php echo $day_2['day_description']; ?>
                            </ul>
                        <?php endif; ?>   

                        <?php
                            $day_3 = get_field('day_3');	
                            
                            if( $day_3 ): ?>

                            <ul><?php echo $day_3['day_title']; ?>
                                <?php echo $day_3['day_description']; ?>
                            </ul>
                        <?php endif; ?>

                        <?php
                            $day_4 = get_field('day_4');	
                            
                            if( $day_4 ): ?>

                            <ul><?php echo $day_4['day_title']; ?>
                                <?php echo $day_4['day_description']; ?>
                            </ul>
                        <?php endif; ?>

                        <?php
                            $day_5 = get_field('day_5');	
                            
                            if( $day_5 ): ?>

                            <ul><?php echo $day_5['day_title']; ?>
                                <?php echo $day_5['day_description']; ?>
                            </ul>
                        <?php endif; ?>

                        <?php
                            $day_6 = get_field('day_6');	
                            
                            if( $day_6 ): ?>

                            <ul><?php echo $day_6['day_title']; ?>
                                <?php echo $day_6['day_description']; ?>
                            </ul>
                        <?php endif; ?>

                        <?php
                            $day_7 = get_field('day_7');	
                            
                            if( $day_7 ): ?>

                            <ul><?php echo $day_7['day_title']; ?>
                                <?php echo $day_7['day_description']; ?>
                            </ul>
                        <?php endif; ?>

                        <?php
                            $day_8 = get_field('day_8');	
                            
                            if( $day_8 ): ?>

                            <ul><?php echo $day_8['day_title']; ?>
                                <?php echo $day_8['day_description']; ?>
                            </ul>
                        <?php endif; ?>

                        <?php
                            $day_9 = get_field('day_9');	
                            
                            if( $day_9 ): ?>

                            <ul><?php echo $day_9['day_title']; ?>
                                <?php echo $day_9['day_description']; ?>
                            </ul>
                        <?php endif; ?>

                        <?php
                            $day_10 = get_field('day_10');	
                            
                            if( $day_10 ): ?>

                            <ul><?php echo $day_10['day_title']; ?>
                                <?php echo $day_10['day_description']; ?>
                            </ul>
                        <?php endif; ?>

                        <?php
                            $day_11 = get_field('day_11');	
                            
                            if( $day_11 ): ?>

                            <ul><?php echo $day_11['day_title']; ?>
                                <?php echo $day_11['day_description']; ?>
                            </ul>
                        <?php endif; ?>

                        <?php
                            $day_12 = get_field('day_12');	
                            
                            if( $day_12 ): ?>

                            <ul><?php echo $day_12['day_title']; ?>
                                <?php echo $day_12['day_description']; ?>
                            </ul>
                        <?php endif; ?>

                        <?php
                            $day_13 = get_field('day_13');	
                            
                            if( $day_13 ): ?>

                            <ul><?php echo $day_13['day_title']; ?>
                                <?php echo $day_13['day_description']; ?>
                            </ul>
                        <?php endif; ?>

                        <?php
                            $day_14 = get_field('day_14');	
                            
                            if( $day_14 ): ?>

                            <ul><?php echo $day_14['day_title']; ?>
                                <?php echo $day_14['day_description']; ?>
                            </ul>
                        <?php endif; ?>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="trtansfer">
        <div class="container">
            <div class="trtansfer-content">
                <div class="trtansfer__title-wrap">
                    <h2><?php the_field('trtansfer_main_title');?></h2>
                    <p><?php the_field('trtansfer_subtitle');?></p>
                </div>
                <div class="trtansfer__item-wrap">
                    <div class="trtansfer__item">
                        <div class="trtansfer__item__img">
                            <img src="<?php the_field('icon_1');?>" alt="icon">
                        </div>
                        <div class="trtansfer__item__text">
                            <i class="icon-done"></i>
                            <p><?php the_field('description_1');?></p>
                        </div>
                    </div>
                    <div class="trtansfer__item">
                        <div class="trtansfer__item__img">
                            <img src="<?php the_field('icon_2');?>" alt="icon">
                        </div>
                        <div class="trtansfer__item__text">
                            <i class="icon-done"></i>
                            <p><?php the_field('description_2');?></p>
                        </div>
                    </div>
                    <div class="trtansfer__item">
                        <div class="trtansfer__item__img">
                            <img src="<?php the_field('icon_3');?>" alt="icon">
                        </div>
                        <div class="trtansfer__item__text">
                            <i class="icon-done"></i>
                            <p><?php the_field('description_3');?></p>
                        </div>
                    </div>
                    <div class="trtansfer__item">
                        <div class="trtansfer__item__img">
                            <img src="<?php the_field('icon_4');?>" alt="icon">
                        </div>
                        <div class="trtansfer__item__text">
                            <i class="icon-done"></i>
                            <p><?php the_field('description_4');?></p>
                        </div>
                    </div>
                    <div class="trtansfer__item">
                        <div class="trtansfer__item__img">
                            <img src="<?php the_field('icon_5');?>" alt="icon">
                        </div>
                        <div class="trtansfer__item__text">
                            <i class="icon-done"></i>
                            <p><?php the_field('description_5');?></p>
                        </div>
                    </div>
                    <div class="trtansfer__item">
                        <div class="trtansfer__item__img">
                            <img src="<?php the_field('icon_6');?>" alt="icon">
                        </div>
                        <div class="trtansfer__item__text">
                            <i class="icon-done"></i>
                            <p><?php the_field('description_6');?></p>
                        </div>
                    </div>
                    <div class="trtansfer__item">
                        <div class="trtansfer__item__img">
                            <img src="<?php the_field('icon_7');?>" alt="icon">
                        </div>
                        <div class="trtansfer__item__text">
                            <i class="icon-done"></i>
                            <p><?php the_field('description_7');?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="booklet">
        <div class="container">
            <div class="booklet-content">
                <div class="booklet__title-wrap">
                    <h2><?php the_field('form_main_title');?></h2>
                    <p><?php the_field('form_subtitle');?></p>
                </div>
				
				<?php echo do_shortcode(get_field('shortcode')); ?>
				
            </div>
        </div>
    </section>
    <section class="gallery gallery_page">
        <div class="container">
            <div class="gallery-content">
                <h2><?php the_field('gallery_main_title');?></h2>
                <p class="gallery__main-sub-title"><?php the_field('gallery_subtitle');?></p>
                <div class="gallery__item-conatiner">
                    <div class="gallery__item-wrap gallery__item-wrap1 gallery-slider">

                        <?php
                            $item_1 = get_field('item_1');	
                            
                            if( $item_1 ): ?>

                            <div class="gallery__item">
                                <div class="gallery__item-img">
                                    <img src="<?php echo $item_1['item_img']; ?>" alt="img">
                                </div>
                                <div class="gallery__item-title">
                                    <span><?php echo $item_1['item_title']; ?></span>
                                    <p><?php echo $item_1['item_subtitle']; ?></p>
                                </div>
                            </div>
                        <?php endif; ?>

                        <?php
                            $item_2 = get_field('item_2');	
                            
                            if( $item_2 ): ?>

                            <div class="gallery__item">
                                <div class="gallery__item-img">
                                    <img src="<?php echo $item_2['item_img']; ?>" alt="img">
                                </div>
                                <div class="gallery__item-title">
                                    <span><?php echo $item_2['item_title']; ?></span>
                                    <p><?php echo $item_2['item_subtitle']; ?></p>
                                </div>
                            </div>
                        <?php endif; ?>

                        <?php
                            $item_3 = get_field('item_3');	
                            
                            if( $item_3 ): ?>

                            <div class="gallery__item">
                                <div class="gallery__item-img">
                                    <img src="<?php echo $item_3['item_img']; ?>" alt="img">
                                </div>
                                <div class="gallery__item-title">
                                    <span><?php echo $item_3['item_title']; ?></span>
                                    <p><?php echo $item_3['item_subtitle']; ?></p>
                                </div>
                            </div>
                        <?php endif; ?>

                        <?php
                            $item_4 = get_field('item_4');	
                            
                            if( $item_4 ): ?>

                            <div class="gallery__item">
                                <div class="gallery__item-img">
                                    <img src="<?php echo $item_4['item_img']; ?>" alt="img">
                                </div>
                                <div class="gallery__item-title">
                                    <span><?php echo $item_4['item_title']; ?></span>
                                    <p><?php echo $item_4['item_subtitle']; ?></p>
                                </div>
                            </div>
                        <?php endif; ?>

                    </div>
                    <div class="gallery__item-wrap gallery__item-wrap2">

                        <?php
                            $item_5 = get_field('item_5');	
                            
                            if( $item_5 ): ?>

                            <div class="gallery__item">
                                <div class="gallery__item-img">
                                    <img src="<?php echo $item_5['item_img']; ?>" alt="img">
                                </div>
                                <div class="gallery__item-title">
                                    <span><?php echo $item_5['item_title']; ?></span>
                                    <p><?php echo $item_5['item_subtitle']; ?></p>
                                </div>
                            </div>
                        <?php endif; ?>

                        <?php
                            $item_6 = get_field('item_6');	
                            
                            if( $item_6 ): ?>

                            <div class="gallery__item">
                                <div class="gallery__item-img">
                                    <img src="<?php echo $item_6['item_img']; ?>" alt="img">
                                </div>
                                <div class="gallery__item-title">
                                    <span><?php echo $item_6['item_title']; ?></span>
                                    <p><?php echo $item_6['item_subtitle']; ?></p>
                                </div>
                            </div>
                        <?php endif; ?>

                        <?php
                            $item_7 = get_field('item_7');	
                            
                            if( $item_7 ): ?>

                            <div class="gallery__item">
                                <div class="gallery__item-img">
                                    <img src="<?php echo $item_7['item_img']; ?>" alt="img">
                                </div>
                                <div class="gallery__item-title">
                                    <span><?php echo $item_7['item_title']; ?></span>
                                    <p><?php echo $item_7['item_subtitle']; ?></p>
                                </div>
                            </div>
                        <?php endif; ?>

                        <?php
                            $item_8 = get_field('item_8');	
                            
                            if( $item_8 ): ?>

                            <div class="gallery__item">
                                <div class="gallery__item-img">
                                    <img src="<?php echo $item_8['item_img']; ?>" alt="img">
                                </div>
                                <div class="gallery__item-title">
                                    <span><?php echo $item_8['item_title']; ?></span>
                                    <p><?php echo $item_8['item_subtitle']; ?></p>
                                </div>
                            </div>
                        <?php endif; ?>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- <section class="reviews">
        <div class="container">
            <div class="reviews-content">
                <h2>Reviews</h2>
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
    </section> -->
    <section class="form">
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

<?php get_footer();?>