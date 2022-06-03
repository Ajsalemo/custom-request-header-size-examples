package com.requestheaders.azure.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    String message = "custom-request-header-size-example-java";

    @GetMapping("/")
    public String index() {
        return message;
    }
}
