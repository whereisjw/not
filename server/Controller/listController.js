import * as listRepository from "../Repository/listRepository.js";

export async function insert(req, res) {
  const { title, image, content } = req.body;
  const result = await listRepository.insert(title, image, content);
  if (result == "ok") {
    res.json(result);
  }
}
