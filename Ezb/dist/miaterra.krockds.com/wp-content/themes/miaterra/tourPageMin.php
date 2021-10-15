<?php
    /*
        Template Name: Minimal Tours Page Template
    */
?>

<?php get_header('page'); ?>

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
</main>

<?php get_footer();?>