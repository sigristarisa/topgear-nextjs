import type { NextApiRequest, NextApiResponse } from "next";
import { sendDataResponse, sendMessageResponse } from "../../helpers/responses";
import Car from "../../helpers/models/carlisting";
import { Data } from "../../helpers/types";

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
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
};

export default handler;
