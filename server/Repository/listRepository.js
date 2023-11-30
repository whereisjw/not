import { db } from "../db/database.js";

export async function insert(title, image, content) {
  return db
    .execute(
      `INSERT INTO p_news(title,image,content,ndate)value(?,?,?,curdate())`,
      [title, image, content]
    )
    .then((res) => "ok");
}

export async function getNews() {
  return db
    .execute(`SELECT  title,image FROM p_news`, [])
    .then((res) => res[0]);
}
