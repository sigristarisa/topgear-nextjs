import type { NextApiRequest, NextApiResponse } from "next";
import { sendDataResponse, sendMessageResponse } from "../../helpers/responses";
import Car from "../../helpers/models/carlisting";
import { Data, FilterType } from "../../helpers/types";

const filterHasValues = (filter: FilterType): boolean => {
  const filterValues = Object.values(filter);
  return filterValues.find((category) => category) ? true : false;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log("in handler");
  console.log("filterHasValues", filterHasValues(req.body));
  if (!filterHasValues(req.body)) {
    const allCarlisting = await Car.findAll();
    return sendDataResponse(res, 200, allCarlisting);
  } else {
    try {
      const foundCarlisting = await Car.findByFilter(req.body);

      if (!foundCarlisting.length) {
        return sendDataResponse(res, 404, { id: "cars not found" });
      }

      return sendDataResponse(res, 200, foundCarlisting);
    } catch (error: any) {
      console.error("What happened?: ", error.message);
      return sendMessageResponse(res, 500, "Unable to send carlisting");
    }
  }
};

export default handler;
