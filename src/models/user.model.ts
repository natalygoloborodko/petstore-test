export class User {
  private id: number;
  private username: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private password: string;
  private phone: string;
  private userStatus: number;

  public getId(): number {
    return this.id;
  }

  public setId(id: number): User {
    this.id = id;

    return this;
  }

  public getUsername(): string {
    return this.username;
  }

  public setUsername(username: string): User {
    this.username = username;

    return this;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public setFirstName(firstName: string): User {
    this.firstName = firstName;

    return this;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setLastName(lastName: string): User {
    this.lastName = lastName;

    return this;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): User {
    this.email = email;

    return this;
  }

  public getPassword(): string {
    return this.password;
  }

  public setPassword(password: string): User {
    this.password = password;

    return this;
  }

  public getPhone(): string {
    return this.phone;
  }

  public setPhone(phone: string): User {
    this.phone = phone;

    return this;
  }

  public getUserStatus(): number {
    return this.userStatus;
  }

  public setUserStatus(userStatus: number): User {
    this.userStatus = userStatus;

    return this;
  }
}
