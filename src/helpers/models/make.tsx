import prisma from "@prisma/client";
import { MakeType } from "../types";

const dbClient = new prisma.PrismaClient();

export default class Make {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }

  static async findAll() {
    const allMake = await dbClient.make.findMany({
      include: { carlisting: true },
    });
    return allMake;
  }
}
