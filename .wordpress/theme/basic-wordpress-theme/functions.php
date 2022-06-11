<?php
// Menu support.
register_nav_menus(
    array(
        'menu-1' => esc_html__('Extra Header Menu', 'template'),
        'menu-2' => esc_html__('Extra Footer Menu', 'template'),
    )
);
add_theme_support('post-thumbnails');
