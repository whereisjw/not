import express, { urlencoded } from "express";
import listRouter from "./Router/listRouter.js";
import cors from "cors";
const app = express();

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/list", listRouter);
app.listen(5959, () => {
  console.log(`http://localhost:5959 실행중~`);
});
