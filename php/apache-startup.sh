#!/bin/bash

echo "Copying custom 000-default.conf over to /etc/apache2/sites-enabled/000-default.conf"

APACHE_CONF=/home/000-default.conf

if [ -f "$APACHE_CONF" ]; then
    cp "$APACHE_CONF" /etc/apache2/sites-enabled/000-default.conf
else
    echo "File does not exist, skipping cp."
fi