import KafkaConfig from "../config/kafka-config.js";

const locoService = async (req, res) => {
  try{
    const data = req.body;
    const kafka = new KafkaConfig();
    const messages = [{value: JSON.stringify(data)}];
    kafka.produce("locomotive", messages);

    res.status(200).json({
      message: "locomotive data sent",
    });
  } catch (error) {
    console.error(error);
  }
}

export default locoService;