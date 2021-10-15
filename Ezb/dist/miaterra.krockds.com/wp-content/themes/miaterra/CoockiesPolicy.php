<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Miaterra
 */

get_header('page');
?>

<main id="main">
	<section class="main-pages error">
		<div class="main-pages__text-bg">
			<p>SORRY</p>
		</div>
		<div class="error-text">
			<div class="container">
				<p>We sent our tour agent to guide you! wait a bit</p>
			</div>
		</div>
		<picture class="main-pages__img-wrap error__img-wrap">
			<source srcset="./images/web-p/404-bg-img.webp" type="image/webp">
			<img src="./images/404-bg-img.png" alt="img">
		</picture>
	</section>
</main>

<?php
get_footer();
