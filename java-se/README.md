In something like Spring Boot, you may see the following if the overall header size is larger than what's allowed, which is 8KB by default with Spring Boot:

``` 
java.lang.IllegalArgumentException: Request header is too large
```

Using Spring Boot as an example, we can increase the default values for request headers size. You can add an AppSetting named `JAVA_OPTS` to your App Service with the value of `-Dserver.max-http-header-size=30000` which will pass this to the JVM.

Replace the `30000` (30KB) value of a value of your choice.