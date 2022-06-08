# Python

Python and Linux App Services uses [Gunicorn](https://gunicorn.org/) to help run wSGI based applications on Azure. Therefor configuring allowed request header sizes would be done on Gunicorn itself.

You may recieve a `HTTP 400 Bad Request` if headers are too large. You can increase this with the [`limit_request_field_size`](https://docs.gunicorn.org/en/stable/settings.html#limit-request-field-size)

In the Azure Portal go to your App Service and choose **Configuration** -> **General Settings** and then add `gunicorn --bind 0.0.0.0:8000 --timeout 600 app:app --limit-request-field_size 64000` to the **Startup Command** field. This example sets allowed header sizes to 64KB. Change `app:app` to reflect your wSGI variable name and file name that contains the wSGI module.

This general approach using Gunicorn and passing **--limit-request-field_size** would work for most wSGI applications on Python and App Service Linux.