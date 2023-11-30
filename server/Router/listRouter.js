import express from "express";
import { getNews, insert } from "../Controller/listController.js";

const router = express.Router();
router.get("/", getNews);
router.post("/", insert);
export default router;
