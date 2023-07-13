import supertest from 'supertest';
import app from '../index';
import fs from 'fs';
import path from 'path';
import { resizeImage } from '../utilities/resizer';

const request = supertest(app);

describe('Test endpoint', () => {
  it('should get API to resize image successfully.', async (): Promise<void> => {
    const response = await request.get(
      '/api/images?filename=fjord&width=400&height=400',
    );
    expect(response.status).toBe(200);
  });

  it('should not get API to image with wrong query.', async (): Promise<void> => {
    const response = await request.get(
      '/api/images?filename=fjord&width=400&height',
    );
    expect(response.status).toBe(400);
  });

  it('should not get API to resize image when the image does not exist.', async (): Promise<void> => {
    const response = await request.get(
      '/api/images?filename=fjord123&width=400&height=400',
    );
    expect(response.status).toBe(404);
  });
});
describe('Test resize image function', () => {
  const sourceImageFolder = 'source-images';
  const outputImageFolder = 'resized-images';
  const fileName = 'fjord';
  const widthQuery = 333;
  const heightQuery = 444;

  afterEach(() => {
    const outputImagePath = path.join(
      outputImageFolder,
      `${fileName}-${widthQuery}-${heightQuery}.jpg}`,
    );
    if (fs.existsSync(outputImagePath)) {
      fs.unlinkSync(outputImagePath);
    }
  });

  it('should resize image and return the output image path successfully.', async (): Promise<void> => {
    const result = await resizeImage(
      fileName,
      widthQuery,
      heightQuery,
      sourceImageFolder,
      outputImageFolder,
    );
    expect(result).toEqual(
      path.join(
        outputImageFolder,
        `${fileName}-${widthQuery}-${heightQuery}.jpg`,
      ),
    );
    expect(fs.existsSync(result)).toBe(true);
  });
});
