import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FactoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FactoryProvider {

  email:"";
  password:"";
  profile:"";
  constructor(public http: HttpClient) {
    console.log('Hello FactoryProvider Provider');
  }

  
  set_profile(i)
  {
    this.profile = i;
  }
  set_email(i)
  {
    this.email = i;
  }

  set_password(i)
  {
    this.password = i;
  }
  get_profile()
  {
    return this.profile;
  }
  get_email()
  {
    return this.email;
  }
  get_password()
  {
    return this.password;
  }
}

