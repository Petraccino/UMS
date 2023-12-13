import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: any[] = [
    {
      name: 'Hidran1',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43,
    },
    {
      name: 'Hidran2',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43,
    },
    {
      name: 'Hidran3',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43,
    },
    {
      name: 'Hidran4',
      lastname: 'Arias',
      email: 'hidran@gmail.com',
      fiscalcode: 'RSAHRN72M22Z444S',
      province: 'Torino',
      phone: '454545455',
      age: 43,
    },
  ];
  getUsers() {
    return this.users;
  }
  deleteUser(user: any) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
    } else {
      alert('El non trovato');
    }
  }
}
