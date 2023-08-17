import { User } from "../models/user.model";

export class UserFactory {
  public getNewUser() {
    return new User()
        .setId(Math.ceil(Math.random()*100))
        .setUsername('Chandler' + Math.ceil(Math.random()*50))
        .setFirstName('Chandler')
        .setLastName('Bing')
        .setEmail('chandlerB@mail.com')
        .setPassword('Matthew')
        .setPhone('123456789')
        .setUserStatus(0)
  }
}

export const userFactory = new UserFactory();