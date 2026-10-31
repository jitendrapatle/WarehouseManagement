export interface API_RESPONSE<T>{
  message :  string;
  result: boolean;
  data: T
}

export interface IEmployeeLoginResponse {
  token: string
  tokenType: string
  expiresAtUtc: string
  employee: IEmployee
}

export interface IEmployee {
  id: number
  name: string
  userName: string
  role: string
  warehouseAssignedId: number
  warehouseName: string
}
