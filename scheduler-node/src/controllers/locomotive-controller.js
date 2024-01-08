import express from "express";
import locoService from '../Service/locomotive-service.js';

const router = express.Router();

router.route("/locoschedule").post(locoService);

export default router;
