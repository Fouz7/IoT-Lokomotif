import  express from "express";
import {Database} from "./src/database/database.js";
import locomotiveController from './src/controllers/locomotive-controller.js';
import KafkaConfig from "./src/config/kafka-config.js";
const app = express();
const PORT = 1000;

const connect = Database.getConnection().collection("locoschedule");

app.use(express.json());

app.use("/api", locomotiveController);

const kafka = new KafkaConfig();
kafka.consume("locomotive", async (data) => {
    const obj = JSON.parse(data);
    connect.insertOne({
        _id: obj.code,
        name: obj.name,
        dimension: obj.dimension,
        status: obj.status,
        date: obj.date,
        time: obj.time,
    });

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

