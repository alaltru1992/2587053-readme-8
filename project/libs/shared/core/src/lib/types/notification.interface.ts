import {UserInterface} from './user.interface'
export interface NotificationInterface{
  id?: string,
  content: string,
  user: UserInterface,
  email: string
}
