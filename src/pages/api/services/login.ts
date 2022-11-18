import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

type Data = any;

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const _id = Math.random().toString(36).slice(2);
  const token = jwt.sign({ _id }, process.env.TOKEN_SECRET || "");

  return res.status(200).json({ success: true, user: "Test User", token });
}
