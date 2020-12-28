import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  logo = "fa fa-user";
  title = "Create User";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  userDetails() {
    this.router.navigate(['userdetails']);
  }
}
