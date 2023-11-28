import express from "express";
import { insert } from "../Controller/listController.js";

const router = express.Router();

router.post("/", insert);
export default router;
