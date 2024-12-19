import {UserRole} from './user-role.enum'

export interface UserInterface{
  id?: string,
  firstName: string,
  lastName: string,
  dateOfBirth: Date,
  role: UserRole,
  email:string,
}
