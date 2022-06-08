For Tomcat on Linux App Services, some custom configuration to the Tomcat installation will need to be done first. Follow [this guide](https://azureossd.github.io/2022/05/20/Custom-Tomcat-Configuration-on-Azure-App-Service-Linux/index.html) on how to change your `CATALINA_BASE` to move under `/home/tomcat` for persistence.

Once this is done, go to your `/home/tomcat/conf/server.xml` file and look for the `Connector` that contains the **maxHttpHeaderSize** property. Update this to a size that fits, the below example shows this increased to 30KB.

```xml
<Connector 
    port="${port.http}" protocol="HTTP/1.1"
    maxThreads="${catalina.maxThreads}"
    connectionTimeout="20000"
    redirectPort="8443"
    compression="on"
    URIEncoding="UTF-8"
    maxHttpHeaderSize="30000" 
/>
```

The default value on Linux App Service has this set to about 16KB. The below was a test with sending a 27KB Request Header from Postman with the default ~16KB value set:

```
HTTP/1.1 400
Content-Length: 1980
Content-Type: text/html;charset=utf-8
Content-Language: en
Date: Fri, 03 Jun 2022 20:21:21 GMT
 
<!doctype html><html lang="en"><head><title>HTTP Status 400 – Bad Request</title><style type="text/css">body {font-family:Tahoma,Arial,sans-serif;} h1, h2, h3, b {color:white;background-color:#525D76;} h1 {font-size:22px;} h2 {font-size:16px;} h3 {font-size:14px;} p {font-size:12px;} a {color:black;} .line {height:1px;background-color:#525D76;border:none;}</style></head><body><h1>HTTP Status 400 – Bad Request</h1><hr class="line" /><p><b>Type</b> Exception Report</p><p><b>Message</b> Request header is too large</p>
```

Updating this to 30KB, as we did above, this would now be successful. 