import { jest } from '@jest/globals';
import request from 'supertest';

// Mock environment variables before imports
process.env.PORT = '3001';
process.env.CORS_ORIGIN = 'http://localhost:3000';

// Initial import will be handled by beforeEach
describe('Backend API', () => {
  beforeEach(async () => {
    // Clear module cache and mocks before each test
    jest.resetModules();
    jest.clearAllMocks();

    // Import a fresh instance of the app for each test
    const { default: freshApp } = await import('./server.js');
    app = freshApp;
  });

  let app; // Declare app variable to use across tests

  describe('POST /api/marco', () => {
    it('should return 400 if text is missing', async () => {
      const response = await request(app)
        .post('/api/marco')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error', 'Text input is required.');
    });

    it('should successfully return text', async () => {
      const testText = 'marco';
      const response = await request(app)
        .post('/api/marco')
        .send({ text: testText });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('marco', 'Polo');
    });

    it('should successfully return text if no marcopolo', async () => {
      const testText = 'zzzz';
      const response = await request(app)
        .post('/api/marco')
        .send({ text: testText });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('marco', 'zzzzzz');
    });

  });
});
