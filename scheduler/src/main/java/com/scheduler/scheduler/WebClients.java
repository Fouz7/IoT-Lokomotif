package com.scheduler.scheduler;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClients {

    @Bean
    WebClient webClient() {
        return WebClient.builder().baseUrl("http://localhost:1000/api").build();
    }
    
}
