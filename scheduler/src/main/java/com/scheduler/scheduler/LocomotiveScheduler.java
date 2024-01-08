package com.scheduler.scheduler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;


import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import static com.scheduler.scheduler.Generator.*;
import com.scheduler.scheduler.models.Locomotive;

import reactor.core.publisher.Mono;

@Component
public class LocomotiveScheduler {

    @Autowired
    private WebClients webClients;

    @Scheduled(fixedRate = 10000)
    public void createLocomotive() {
        Locomotive locomotive = Locomotive.builder()
                .code(generateCode())
                .name(generateName())
                .dimension(generateDimension())
                .status(generateStatus())
                .date(LocalDate.now().toString())
                .time(LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss")))
                .build();
        
        webClients.webClient()
                .post()
                .uri("/locoschedule")
                .body(Mono.just(locomotive), Locomotive.class)
                .retrieve()
                .bodyToMono(Void.class)
                .block();
        
        System.out.println(locomotive);
    }
}