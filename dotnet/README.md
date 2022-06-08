With .NET Core and Kestrel you can increase header sizes through the [`MaxRequestBodySize`](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.server.kestrel.core.kestrelserverlimits.maxrequestbodysize?view=aspnetcore-6.0) property. The default for this is about 28.6MB.

If header size limits are hit, you'll also encounter an `HTTP 431 Request Header Fields Too Large` error.

We can increase the allowed header size with something like the following with Kestrel:

```c#
builder.WebHost.UseKestrel(k => 
{
    // Increase the Request limit size to 64KB
    k.Limits.MaxRequestBodySize = 64000;
});
```