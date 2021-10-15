<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', "dbf5mlyghdkrhg" );

/** MySQL database username */
define( 'DB_USER', "ugsgu12gj9fnk" );

/** MySQL database password */
define( 'DB_PASSWORD', "&i&`d5P&3ddo" );

/** MySQL hostname */
define( 'DB_HOST', "127.0.0.1" );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ER,j>`_BHeDYbz)8d5YTk|$aGrJwcljRPaJ.<+EYdRMI2}MUNziC0!;>|52Rym+%' );
define( 'SECURE_AUTH_KEY',  '[23cm#BJ!3Kr8r@g3aTcA*ir52aKYgt]e4qhd#/$y$K<JY3MvuV6!q+VXdaYwCC5' );
define( 'LOGGED_IN_KEY',    'E+4Bx$f7/,1u]^wjU]#1Ul4 h>c!^OQ?@msql6&wyg4e}*:=>{79DV(%-F?cM;uS' );
define( 'NONCE_KEY',        '_ zg&Wm2P;`!NE~r;t[$xe; _K@#~@ox!b$_iu<1*|`M+s;)$^;1}shu&(^UwSY%' );
define( 'AUTH_SALT',        'SwULjOA,[]Q`ezl;0Pp(JuQa`s0%~1gkFM*!A1s,;j0g{N`u`5eD%gn.)EfujS<o' );
define( 'SECURE_AUTH_SALT', '>QiE CA$633iFTsBFpJ=*bAi7{[iEbScy$+>Bk85?ttGWzq&}[ZL(noYXDJy]P]|' );
define( 'LOGGED_IN_SALT',   '8?AyKh#Z.pDelgTQ[ox;Ht[k&UVGDPb>iGgMWJQ`{_6|U9#^A#wr6g/K`Vq+0~c}' );
define( 'NONCE_SALT',       '/ow(S{@B>bnvN|3d9Bw#XO>,>!Ty?SiEc%hsW{yJ:KP2a|J<EPDRzu!5-@dSE4Nx' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
