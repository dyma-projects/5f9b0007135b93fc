import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService extends BehaviorSubject<String> {
  public users: String[];

  constructor() {
    super("");
    this.users = [];
  }

  public addUser(user: String): void {
    this.users.push(user);
    console.log("[UserService] : addUser()  " + user);
  }
  public getUsers(): String[] {
    return this.users;
  }
}
