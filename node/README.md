In Node, you can increase header sizes with `--max-http-header-size`. If a request exceeds the allowed header side you may see an **HTTP 431**: `431 Request Header Fields Too Large`.

In `package.json`, add the following to your `scripts` property where needed:

```node
{
  ..other properties..
  "scripts": {
    "start": "node --max-http-header-size=30000 server.js"
  },
  "dependencies": {
    ...some dependencies..
  }
}
```

Optionally, you can add an AppSetting with the name `NODE_OPTIONS` and a value of `--max-http-header-size=30000`