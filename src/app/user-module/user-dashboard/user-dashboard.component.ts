import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  // username="";
  loggedInUser = '';
  compList = this.commonService.companyList;
  constructor(private route: ActivatedRoute, private router: Router, private commonService: CommonServiceService) { }

  ngOnInit() {
    // this.username = this.route.snapshot.paramMap.get('user');
    this.loggedInUser = this.commonService.getLoggedInUserName;
  }

  openChatBox() {
    this.commonService.openChatBox(this.route);
  }

  openTest() {
    this.router.navigate(['test'], {relativeTo: this.route});
  }
}
