import type { NextApiRequest, NextApiResponse } from "next";

type Data = { success: boolean };

export default async function login(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  return res.status(200).json({ success: true });
}
