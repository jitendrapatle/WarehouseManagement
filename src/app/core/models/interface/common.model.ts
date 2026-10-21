export interface API_RESPONSE{
  message :  string;
  result: boolean;
  data: any
}

export interface IEmployeeLoginResponse {
  token: string
  tokenType: string
  expiresAtUtc: string
  employee: Employee
}

export interface Employee {
  id: number
  name: string
  userName: string
  role: string
  warehouseAssignedId: number
  warehouseName: string
}