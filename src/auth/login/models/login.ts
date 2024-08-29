export type UserData = {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  token: string;
  refreshToken: string;
  lastActiveAt: string;
};

export type UserAuthReq = {
  token: string;
  tokenType: string;
  loginType: string;
  username: string;
  password: string;
};

export type UserLoginDetails = {
  id?: string;
  isSa?: string;
  name?: string;
  token?: string;
  imageUrl?: string;
};

export type DecodedToken = {
  id: string;
  name: string;
  email: string;
  type: string;
  companyId: string;
  role: string;
  iat: number;
  exp: number;
};

export type TenantUserType = {
  type: string;
  tenants: {};
};

export type loginData = {
  loginType: string;
  email: string;
};
