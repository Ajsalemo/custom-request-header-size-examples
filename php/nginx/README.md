Increasing the allowed header size is mostly the same as the Apache method. NGINX's directive that sets this value is [`client_header_buffer_size`](https://nginx.org/en/docs/http/ngx_http_core_module.html#client_header_buffer_size).

NGINX may throw back a a `HTTP 400 Bad Request` if headers are too large.

1. Go to the Kudu site for the application and select SSH.
2. Run `cp /etc/nginx/sites-available/default /home` to copy the configuration file over to home. Use an FTP client to download the file to your local machine or edit this file directly through the FTP client. Make sure our custom `default` configuration file is placed under `/home`/.
3. Edit the file to include the `client_header_buffer_size` directive set to the needed value in your `server` block.
4. Create a custom startup script and include the following:

```bash
#!/bin/bash

echo "Copying custom default.conf over to /etc/nginx/sites-available/default"

NGINX_CONF=/home/default.conf

if [ -f "$NGINX_CONF" ]; then
    cp /home/default.conf /etc/nginx/sites-available/default
    service nginx reload
else
    echo "File does not exist, skipping cp."
fi
```

5. Upload this startup script to the application using an FTP client. Place this under /home. This must be a Bash script (.sh file extension).
6. Go to the App Service and then choose **Configuration** -> **General Settings** and in the **Startup command** field enter `/home/startup.sh` - Note, startup.sh is just an example name. Replace this with the Bash script name you uploaded.

   ![PHP NGINX startup script](/media/2022/06/azure-ossd-php-request-headers-2.png)

7. Click save, which will restart the application, and the request header allowed values should now be updated.