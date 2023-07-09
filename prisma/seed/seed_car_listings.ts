import prisma, { Prisma, PrismaClient } from "@prisma/client";
import { carlisting } from "./rawCarlisting";
const dbClient = new prisma.PrismaClient();
const createCarlistingData = async () => {
    const carlistingArr = [];
    for (const car of carlisting) {
        const createdCarlisting = await dbClient.carlisting.create({
            data: {
                ...car,
                // make: { connect: { id: car.makeId } },
                // model: { connect: { id: car.modelId } },
                // gearboxType: { connect: { id: car.gearboxId } },
                // driveType: { connect: { id: car.driveId } },
                // fuelType: { connect: { id: car.fuelId } },
            },
        });
        carlistingArr.push(createdCarlisting);
    }
    return carlistingArr;
};

createCarlistingData()
    .catch(async (e) => {
        console.error(e);
    })
    .then(() => process.exit(1));