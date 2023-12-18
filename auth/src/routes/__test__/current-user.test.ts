import { response } from 'express';
import request from 'supertest';
import { app } from '../../app';

it('responds with details about current users', async () => {
  const cookie = await signin();

  const response = await request(app)
    .get('/api/users/currentuser')
    .set('Cookie', cookie)
    .send()
    .expect(200);

  expect(response.body.currentUser.email).toBe('test@test.com');
});

it('responds with null if not auth', async () => {
  const response = await request(app)
    .get('/api/users/currentuser')
    .send()
    .expect(200);

  expect(response.body.currentUser).toBeNull();
});
