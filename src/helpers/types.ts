/*--- Seeding ---*/
export interface CarlistingSeed {
  mileage: number;
  description: string;
  price: number;
  makeId: number;
  modelId: number;
  gearboxId: number;
  driveId: number;
  fuelId: number;
  is_online: boolean;
  orderId?: number | null;
}

export interface MakeSeed {
  name: string;
}

export interface ModelSeed {
  name: string;
}

export interface ImageSeed {
  url: string;
}
export interface GearboxTypeSeed {
  name: string;
}

export interface DriveTypeSeed {
  name: string;
}

export interface FuelTypeSeed {
  name: string;
}

/*--- Client ---*/
export interface Carlisting {
  id: number;
  mileage: number;
  description: string;
  price: number;
  make: MakeType | null;
  makeId: number;
  model: ModelType | null;
  modelId: number;
  images: ImageType[];
  gearboxType: GearboxType | null;
  gearboxId: number;
  driveType: DriveType | null;
  driveId: number;
  fuelType: FuelType | null;
  fuelId: number;
  is_online: boolean;
  order: OrderType | null;
  orderId: number;
  createdAt: Date | string;
  updatedAt: Date | string | null;
}

export interface MakeType {
  id?: number;
  name: string;
  carlisting?: Carlisting[] | [];
}

export interface ModelType {
  id: number;
  name: string;
  carlisting?: Carlisting[] | [];
}

export interface ImageType {
  id: number;
  url: string;
  carlisting: Carlisting;
}

export interface GearboxType {
  id: number;
  name: string;
  carlisting?: Carlisting[];
}

export interface DriveType {
  id: number;
  name: string;
  carlisting: Carlisting[];
}

export interface FuelType {
  id: number;
  name: string;
  carlisting: Carlisting[];
}

export interface OrderType {
  id: number;
  carlisting: Carlisting;
  hasDeliveryService: boolean;
  totalPrice: number;
}

export interface CustomerType {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  order: OrderType[];
}

export interface FilterType {
  make: MakeType | null;
  model: ModelType | null;
  priceMin: number | undefined;
  priceMax: number | undefined;
  gearbox: GearboxType | null;
  mileageMin: number | undefined;
  mileageMax: number | undefined;
  fuel: FuelType | null;
  drive: DriveType | null;
}

export interface Data {
  name: string;
}
