import axios from 'axios';
import { User } from '../models/user.model';

const client = axios.create({
  baseURL: 'https://petstore.swagger.io/v2',
  timeout: 20000,
  maxRedirects:2,
  headers: {
    'Content-Type': 'application/json',
    'api_key': 'special-key'
  }
});

export class ApiClient {
  protected static client = client;

  public async createUser(body: User) {
    const response = await client.post(`/user`, body);

    return response.data;
  }

  public async getUserByName(name: string) {
    const response = await client.get(`/user/${name}`);

    return response.data;
  }

  public async updateUser(body: User) {
    const response = await client.put(`/user/${body.getUsername()}`, body);

    return response.data;
  }
}

export const apiClient = new ApiClient();