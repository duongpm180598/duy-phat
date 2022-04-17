export interface UserLogin {
  email: string;
  password: string;
}

export interface User {
  access_token: string;
  email: string;
  name: string;
  avatarUrl: string;
  createdAt: Date | string;
  isAdmin: true;
}
