import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService extends BehaviorSubject<String> {
  public users: String[];

  constructor() {
    super("");
  }

  public addUser(user: String): void {
    console.log("[UserService] : addUser() à implémenter : " + user);
    this.users.push(user);
    console.log("[UserService] : addUser()  " + user);
  }
}
