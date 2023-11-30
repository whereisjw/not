# 게시판 연습

- npm init
- npm i express
- npm i nodemon
- npm i cors
- npm i mysql2

```
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "app.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

- "type": "module", "start": "app.js"
- 모듈타입과 start경로 추가

```
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
```

인코딩작업과 라우터 만들기

```
import express from "express";
import { insert } from "../Controller/listController.js";

const router = express.Router();

router.post("/", insert);
export default router;
```

```
import * as listRepository from "../Repository/listRepository.js";

export async function insert(req, res) {
  const { title, image, content } = req.body;
  const result = await listRepository.insert(title, image, content);
  if (result == "ok") {
    res.json(result);
  }
}
```

```
import { db } from "../db/database.js";

export async function insert(title, image, content) {
  return db
    .execute(
      `INSERT INTO p_news(title,image,content,ndate)value(?,?,?,curdate())`,
      [title, image, content]
    )
    .then((res) => "ok");
}
```

```
import mysql from "mysql2";

const pool = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "jiwontax48*",
  database: "hrdb2019",
});

export const db = pool.promise();
```

body를 통해 넘어오는 데이터 확인
![Alt text](image.png)

# 글목록 get

```
export async function getNews() {
  return db
    .execute(`SELECT  title,image FROM p_news`, [])
    .then((res) => res[0]);
}
```

```
export async function getNews(req, res) {
  const result = await listRepository.getNews();
  console.log(result);
  res.json(result);
}
```

```
router.get("/", getNews);
```
