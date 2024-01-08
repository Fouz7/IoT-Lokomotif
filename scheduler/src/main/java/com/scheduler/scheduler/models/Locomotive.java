package com.scheduler.scheduler.models;


import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Locomotive {
        private String code;
        private String name;
        private String dimension;
        private String status;
        private String date;
        private String time;
}
