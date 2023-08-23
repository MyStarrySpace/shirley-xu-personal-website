import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const artPath = path.join(process.cwd(), 'public/images/art');
  const filenames = fs.readdirSync(artPath);
  const images = filenames.map((file) => `${file}`);
  res.status(200).json({ images });
}

