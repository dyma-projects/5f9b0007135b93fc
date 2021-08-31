import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { UserService } from "../shared/user.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"],
})
export class AddUserComponent implements OnInit {
  @ViewChild("input") public el: ElementRef;

  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
    console.log("[AddUserComponent] Constructor : userService injected.");
  }

  ngOnInit() {
    console.log("[AddUserComponent] ngOnInit : adding users");
  }

  addUser() {
    const username = this.el.nativeElement.value;
    console.log("[AddUserComponent] addUser : " + username);

    if (username) {
      // on utilise le service ici pour ajouter l'utilisateur;
      this.userService.addUser(username);
      this.el.nativeElement.value = "";
    }
  }
}
