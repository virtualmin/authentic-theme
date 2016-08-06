#!/usr/bin/perl

#
# Authentic Theme 18.08 (https://github.com/qooob/authentic-theme)
# Copyright 2014-2016 Ilia Rostovtsev <programming@rostovtsev.ru>
# Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
#

do "authentic-theme/authentic-lib.pm";

# XXX should actually be a redirect or something else
$base_remote_user !~ /^(root|admin)$/ && error($text{'err_access_not_root'});

__config_dir_available();

unlink_file( $in{'file'} );
write_file_contents( $in{'file'}, $in{'data'} );

if ( usermin_available() ) {
    ( my $_file = $in{'file'} ) =~ s/webmin/usermin/;
    unlink_file($_file);
    write_file_contents( $_file, $in{'data'} );
}
redirect("/webmin/edit_themes.cgi");
