import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { resizeImage } from './utilities/resizer';

const app = express();
const PORT = 3000;
const errorMessage = `
  <div>Invalid query, please enter the correct query. You can click the link below for example: </div>
  <a href="http://localhost:3000/api/images?filename=fjord&width=400&height=400">http://localhost:3000/api/images?filename=fjord&width=400&height=400</a>
`;

app.get('/api/images', async (req: Request, res: Response): Promise<void> => {
  const fileName: string | undefined = req.query.filename?.toString();
  const widthQuery: string | undefined = req.query.width?.toString();
  const heightQuery: string | undefined = req.query.height?.toString();

  try {
    let imagePath = path.join(
      __dirname,
      '../',
      'source-images',
      `${fileName}.jpg`,
    );

    if (widthQuery && heightQuery) {
      const resizedImagePath = await resizeImage(
        fileName as string,
        Number(widthQuery),
        Number(heightQuery),
        'source-images',
        'resized-images',
      );
      imagePath = resizedImagePath;
    } else {
      res.status(400).send(errorMessage);
      return;
    }

    const image = fs.readFileSync(imagePath);
    res.contentType('image/jpg');
    res.status(200).send(image);
  } catch (error) {
    res
      .status(404)
      .send(
        'This image does not exist, please enter the correct image name or select another image.',
      );
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
