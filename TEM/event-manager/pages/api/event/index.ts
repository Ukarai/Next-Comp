import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const result = await prisma.event.create({
            data: {
                name: req.body.name,
                venue: req.body.venue
            }
        });

        return res.status(200).json(result);
    }

    res.status(405).send('Unsupported request');
}