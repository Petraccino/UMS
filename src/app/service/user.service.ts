import { User } from './../classes/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [
    {
      id: 1,
      name: 'Hidran1',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43,
    },
    {
      id: 2,
      name: 'Hidran2',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43,
    },
    {
      id: 3,
      name: 'Hidran3',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43,
    },
    {
      id: 4,
      name: 'Hidran4',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43,
    },
  ];
  getUsers(): User[] {
    return this.users;
  }
  deleteUser(user: User): void {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    } else {
      alert('El non trovato');
    }
  }

  updateUser(user: User): void {
    const index = this.users.findIndex((userIndex) => userIndex.id == user.id);
    alert(index);
    if (index !== -1) {
      this.users[index] = {...user};
    }
  }

  createUser(user: User): void {
    this.users.splice(0,0, {...user});
  }
}
