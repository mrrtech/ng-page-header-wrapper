import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  logo = "fa fa-list";
  title = "User Details";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  createUser() {
    this.router.navigate(['createuser']);
  }

}
