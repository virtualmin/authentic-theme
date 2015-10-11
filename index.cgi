#!/usr/bin/perl

#
<<<<<<< HEAD
# Authentic Theme 17.00 (https://github.com/qooob/authentic-theme)
=======
# Authentic Theme 16.01 (https://github.com/qooob/authentic-theme)
>>>>>>> 26c36195a7bc42a58e36b30aed57642ba4b432c4
# Copyright 2015 Ilia Rostovtsev <programming@rostovtsev.ru>
# Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
#

BEGIN { push( @INC, ".." ); }
use WebminCore;
&ReadParse();
&init_config();

use lib 'authentic-theme/lib';
use JSON qw( decode_json );

do "authentic-theme/authentic-lib.cgi";

our (
    %gconfig,              $current_theme,  $root_directory,
    $theme_root_directory, $t_var_switch_m, $t_var_product_m
);
our %text    = &load_language($current_theme);
our %gaccess = &get_module_acl( undef, "" );
our $title   = &get_html_framed_title();

&authentic();
