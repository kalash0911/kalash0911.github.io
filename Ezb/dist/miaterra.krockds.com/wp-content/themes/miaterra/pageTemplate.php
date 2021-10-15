<?php
    /*
        Template Name: Blank page template
    */
?>

<?php get_header('page'); ?>

<main id="main">
	<section class="main-pages template">
		<div class="main-pages__text-bg template__text-bg">
			<p><?php the_field('policy_main_title');?></p>
		</div>
		<div class="error-text template-text">
			<div class="container">
				<h1><?php the_field('policy_main_title');?></h1>
				<p><?php the_field('policy_text');?> 
				</p>
			</div>
		</div>
	</section>
</main>

<?php get_footer();?>
