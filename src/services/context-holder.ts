import { User } from "../models/user.model";

class ContextHolder {
  public user: User;
}

export const contextHolder = new ContextHolder();