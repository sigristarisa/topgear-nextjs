import prisma from "@prisma/client";
import {
  MakeType,
  ModelType,
  ImageType,
  GearboxType,
  DriveType,
  FuelType,
  OrderType,
  FilterType,
} from "../types";

const dbClient = new prisma.PrismaClient();

export default class Car {
  id: number;
  mileage: number;
  description: string;
  price: number;
  make: MakeType;
  model: ModelType;
  images: ImageType[];
  gearboxType: GearboxType;
  driveType: DriveType;
  fuelType: FuelType;
  order: OrderType | null;

  constructor(
    id: number,
    mileage: number,
    description: string,
    price: number,
    make: MakeType,
    model: ModelType,
    images: ImageType[],
    gearboxType: GearboxType,
    driveType: DriveType,
    fuelType: FuelType,
    order: OrderType | null
  ) {
    (this.id = id),
      (this.mileage = mileage),
      (this.description = description),
      (this.price = price),
      (this.make = make),
      (this.model = model),
      (this.images = images),
      (this.gearboxType = gearboxType),
      (this.driveType = driveType),
      (this.fuelType = fuelType),
      (this.order = order);
  }

  static async findAll() {
    const allCarlisting = await dbClient.carlisting.findMany({
      include: {
        make: true,
        model: true,
        gearboxType: true,
        driveType: true,
        fuelType: true,
      },
    });
    return allCarlisting;
  }

  static async findByFilter(filter: FilterType) {
    const {
      make,
      model,
      priceMin,
      priceMax,
      mileageMin,
      mileageMax,
      gearbox,
      drive,
      fuel,
    } = filter;

    console.log("filter", filter);

    const foundCarlisting = await dbClient.carlisting.findMany({
      where: {
        mileage: {
          gte: mileageMin,
          lte: mileageMax,
        },
        make: {
          name: make?.name,
        },
        model: {
          name: model?.name,
        },
        price: {
          gte: priceMin,
          lte: priceMax,
        },
        gearboxType: {
          name: gearbox?.name,
        },
        fuelType: {
          name: fuel?.name,
        },
        driveType: {
          name: drive?.name,
        },
      },
      include: {
        make: true,
        model: true,
        gearboxType: true,
        driveType: true,
        fuelType: true,
      },
    });
    return foundCarlisting;
  }
}
