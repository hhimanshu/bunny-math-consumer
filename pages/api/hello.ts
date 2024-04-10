// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { add } from "@hhimanshu/bunny-math-producer";

type Data = {
  name: string;
  age: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const total = add(12, 23);
  res.status(200).json({ name: "John Doe", age: total });
}
