import { carlisting } from "./rawCarlisting";
import { makeList } from "./rawMake";
import { modelList } from "./rawModel";
import { image1 } from "./rawImage";
import { gearboxList } from "./rawGearboxType";
import { driveList } from "./rawDriveType";
import { fuelList } from "./rawFuelType";
import {
  CarlistingSeed,
  Carlisting,
  MakeSeed,
  ModelSeed,
  ImageSeed,
  GearboxTypeSeed,
  DriveTypeSeed,
  FuelTypeSeed,
} from "../../src/helpers/types";
import prisma, { Prisma, PrismaClient } from "@prisma/client";

const dbClient = new prisma.PrismaClient();

const seed = async (): Promise<void> => {
  // await createCarlistingData();
  await createMakeData();
  await createModelData();
  await createGearboxData();
  await createDriveData();
  await createFuelData();
  process.exit(0);
};

// const createCarlistingData = async () => {
//   const carlistingArr = [];
//   for (const car of carlisting) {
//     const createdCarlisting = await dbClient.carlisting.create({
//       data: {
//         ...car,
//         make: { connect: { id: car.makeId } },
//         model: { connect: { id: car.modelId } },
//         gearboxType: { connect: { id: car.gearboxId } },
//         driveType: { connect: { id: car.driveId } },
//         fuelType: { connect: { id: car.fuelId } },
//       },
//     });
//     carlistingArr.push(createdCarlisting);
//   }
//   return carlistingArr;
// };

const createMakeData = async (): Promise<MakeSeed[]> => {
  const makeArr = [];
  for (const make of makeList) {
    const createdMake = await dbClient.make.create({
      data: make,
    });
    makeArr.push(createdMake);
  }
  return makeArr;
};

const createModelData = async (): Promise<ModelSeed[]> => {
  const modelArr = [];
  for (const model of modelList) {
    const createdModel = await dbClient.model.create({
      data: model,
    });
    modelArr.push(createdModel);
  }
  return modelArr;
};

const createGearboxData = async (): Promise<GearboxTypeSeed[]> => {
  const gearboxArr = [];
  for (const gearbox of gearboxList) {
    const createdGearbox = await dbClient.gearboxType.create({
      data: gearbox,
    });
    gearboxArr.push(createdGearbox);
  }
  return gearboxArr;
};

const createDriveData = async (): Promise<DriveTypeSeed[]> => {
  const driveArr = [];
  for (const drive of driveList) {
    const createdDrive = await dbClient.driveType.create({
      data: drive,
    });
    driveArr.push(createdDrive);
  }
  return driveArr;
};

const createFuelData = async (): Promise<FuelTypeSeed[]> => {
  const fuelArr = [];
  for (const fuel of fuelList) {
    const createdFuel = await dbClient.fuelType.create({
      data: fuel,
    });
    fuelArr.push(createdFuel);
  }
  return fuelArr;
};

// const populateData = async <T>(list: T[], modelName: PrismaModel): Promise<T[]> => {
//   const data = [];
//   const model = prisma[modelName]
//   for (const listItem of list) {
//     const createdData = await dbClient.modelName.create({
//       data: listItem,
//     });
//     data.push(createdData);
//   }
//   return data;
// };

seed()
  .catch(async (e) => {
    console.error(e);
  })
  .then(() => process.exit(1));
