import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const runtime = "edge";

type Context = {
  params: {
    slug: string[];
  };
};
export const GET = async (req: NextApiRequest, { params }: Context) => {
  return NextResponse.json(params);
};
