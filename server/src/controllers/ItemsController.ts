import { Request, Response } from "express";
import knex from "../database/connection";

class ItemsController {
  async index(req: Request, res: Response) {
    const items = await knex("items").select("*");

    const serializesItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.0.106:3333/uploads/${item.image}`,
      };
    });
    res.header("Access-Control-Allow-Origin", "*");
    return res.json(serializesItems);
  }
}

export default ItemsController;
