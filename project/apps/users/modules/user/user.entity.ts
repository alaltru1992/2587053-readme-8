import  {Entity}  from '../../../../libs/shared/core/src/lib';

import {UserAuthInterface, UserRole, StorableEntity} from "@project/core";

export class UserEntity extends Entity implements StorableEntity<UserAuthInterface>{
  public id?: string;
  public hashPassWord: string;
  public firstName: string;
  public lastName: string;
  public dateOfBirth: Date;
  public role: UserRole;
  public email:string;
   constructor(user?: UserAuthInterface) {
     super();
     this.populate(user)
   }

   public populate(user?:UserAuthInterface): void{
     if(!user){
       return
     }
     const {id, hashPassWord, firstName, lastName, dateOfBirth, role, email} = user;
     this.id = id ?? '';
     this.hashPassWord = hashPassWord;
     this.firstName = firstName;
     this.lastName = lastName;
     this.dateOfBirth = dateOfBirth;
     this.role = role;
     this.email = email
   }

  toPOJO(): UserAuthInterface {
     return {
       id: this.id,
       firstName: this.firstName,
       lastName: this.lastName,
       dateOfBirth: this.dateOfBirth,
       role: this.role,
       email:this.email,
       hashPassWord: this.hashPassWord,
     }
  }
}
