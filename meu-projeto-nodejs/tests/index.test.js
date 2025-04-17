import request from 'supertest';
import app from '../src/index'; // Ajuste o caminho conforme necessário

describe('GET /', () => {
    it('should respond with a 200 status code', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });

    it('should return the correct response body', async () => {
        const response = await request(app).get('/');
        expect(response.body).toEqual({ message: 'Hello World' }); // Ajuste conforme a resposta esperada
    });
});