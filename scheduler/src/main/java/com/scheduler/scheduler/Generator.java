package com.scheduler.scheduler;

import java.util.UUID;

public class Generator {
    public static String generateCode() {
        return UUID.randomUUID().toString().substring(0, 10);
    }

    public static String generateName() {
        String[] nameOptions = {"CC201", "CC202", "CC203", "CC204", "CC205"};
        int randomIndex = (int) (Math.random() * nameOptions.length);
        return nameOptions[randomIndex];
    }

    public static String generateDimension() {
        String[] dimensionOptions = {"10x10", "20x20", "30x30", "40x40"};
        int randomIndex = (int) (Math.random() * dimensionOptions.length);
        return dimensionOptions[randomIndex];
    }

    public static String generateStatus() {
        String[] statusOptions = {"Active", "Inactive"};
        int randomIndex = (int) (Math.random() * statusOptions.length);
        return statusOptions[randomIndex];
    }
}
