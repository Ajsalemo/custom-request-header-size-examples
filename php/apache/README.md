PHP on Linux App Service uses Apache for **PHP 7.4** Blessed Images and NGINX for **PHP 8.0** Blessed Images.

## Apache

For Apache, we can increase the request header allowed values with the [`LimitRequestFieldSize`](https://httpd.apache.org/docs/current/mod/core.html#limitrequestfieldsize) directive. On Linux App Services, we'll need to use a Custom Startup Script to do this.

1. Go to the Kudu site for the application and select SSH.
2. Run `cp /etc/apache2/sites-enabled/000-default.conf /home` to copy the configuration file over to home. Use an FTP client to download the file to your local machine or edit this file directly through the FTP client. Make sure our custom `000-default.conf` configuration file is placed under `/home`/.
3. Edit the file to include the `LimitRequestFieldSize` directive set to the needed value.
4. Create a custom startup script and include the following:

```bash
#!/bin/bash

echo "Copying custom 000-default.conf over to /etc/apache2/sites-enabled/000-default.conf"

APACHE_CONF=/home/000-default.conf

if [ -f "$APACHE_CONF" ]; then
    cp "$APACHE_CONF" /etc/apache2/sites-enabled/000-default.conf
else
    echo "File does not exist, skipping cp."
fi
```

> **NOTE**: We're just copying directly over to sites-enabled since the 000-default.conf already exists there.

5. Upload this startup script to the application using an FTP client. Place this under /home. This must be a Bash script (.sh file extension).
6. Go to the App Service and then choose **Configuration** -> **General Settings** and in the **Startup command** field enter `/home/startup.sh` - Note, startup.sh is just an example name. Replace this with the Bash script name you uploaded.

7. Click save, which will restart the application, and the request header allowed values should now be updated.