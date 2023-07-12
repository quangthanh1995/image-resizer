import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

export async function resizeImage(
  fileName: string,
  widthQuery: number,
  heightQuery: number,
  sourceImageFolder: string,
  outputImageFolder: string,
): Promise<string> {
  const imagePath = path.join(sourceImageFolder, `${fileName}.jpg`);
  const outputImagePath = path.join(
    outputImageFolder,
    `${fileName}-${widthQuery}-${heightQuery}.jpg`,
  );

  if (!fs.existsSync(imagePath)) {
    throw new Error('Image not found');
  }

  await sharp(imagePath)
    .resize(widthQuery, heightQuery)
    .toFile(outputImagePath);

  return outputImagePath;
}
