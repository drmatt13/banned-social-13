import type { NextApiRequest, NextApiResponse } from "next";

type Data = any;

export default async function get_user(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.status(200).json({ success: true, user: req.body._id });
}
