import type { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";
import chalk from "chalk";
import axios from "axios";
import sendBeacon from "send-beacon";

interface EventbusApiRequest extends NextApiRequest {
  data: any;
}

const service = `${process.env.URL}/api/services`;

export default async function eventbus(
  req: EventbusApiRequest,
  res: NextApiResponse<any>
) {
  req.body._id = undefined;

  let verifiedToken: string | JwtPayload;

  if (req.headers.authorization?.split(" ")[1]) {
    try {
      verifiedToken = jwt.verify(
        req.headers.authorization.split(" ")[1],
        process.env.TOKEN_SECRET || ""
      );
      req.body._id = (verifiedToken as { _id: string })._id;
    } catch (error) {
      sendBeacon(`${service}/event_capture`);
      console.log(chalk.red.bold(`Invalad Token -> ${req.body.service}`));
      return res.status(401).json({ success: false, error: "Invalad Token" });
    }
  }

  // log request
  console.log(
    chalk.yellow.bold(`${req.body._id || "No Token"}`),
    chalk.red.bold("->"),
    chalk.green.bold(`${req.body.service}`)
  );

  const protectedRoute = () => {
    if (!req.body._id) {
      sendBeacon(`${service}/event_capture`);
      return res.status(401).json({
        success: false,
        error: "Unauthorized",
      });
    }
  };

  try {
    switch (req.body.service) {
      case "get user":
        req = await axios.post(`${service}/get_user`, req.body);
        break;

      case "login":
        req = await axios.post(`${service}/login`, req.body);
        break;

      default:
        req.data = {
          error: "Invalid Service",
          success: false,
        };
        break;
    }
    sendBeacon(`${service}/event_capture`);
    return res.status(200).json({ ...req.data });
  } catch (error) {
    sendBeacon(`${service}/event_capture`);
    return res.status(500).json({ success: false, error });
  }
}
