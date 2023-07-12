import supertest from 'supertest';
import app from '../index';

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
