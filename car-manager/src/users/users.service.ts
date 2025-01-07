import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  username: string;
  password: string;
  role: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];

  async createUser(username: string, password: string, role: string): Promise<User> {
    const user: User = { id: Date.now(), username, password, role };
    this.users.push(user);
    return user;
  }

  async findByUsername(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
