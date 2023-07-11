import prisma from "@prisma/client";

const dbClient = new prisma.PrismaClient();

export default class Gearbox {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);
  }

  static async findAll() {
    const allGearbox = await dbClient.gearboxType.findMany({
      include: {
        carlisting: true,
      },
    });
    return allGearbox;
  }
}
