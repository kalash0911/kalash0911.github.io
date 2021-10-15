<?php
    /*
        Template Name: Page 404
    */
?>

<?php get_header('page'); ?>

<main id="main">
	<section class="main-pages error">
		<div class="main-pages__text-bg">
			<p>SORRY</p>
		</div>
		<div class="main-pages-content error-content">
			<div class="container">
				<h1>Oooops!</h1>
			</div>
		</div>
		<div class="error-text">
			<div class="container">
				<p>We sent our tour agent to guide you! wait a bit</p>
				<a class="main-btn" href="<?php echo get_home_url(); ?>">Back</a>
			</div>
		</div>
		<picture class="main-pages__img-wrap error__img-wrap">
			<img src="<?php echo get_template_directory_uri() ?>/images/404-bg-img.png" alt="img">
		</picture>
	</section>
</main>

<?php get_footer();?>
