import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-dashboard',
  templateUrl: './register-dashboard.component.html',
  styleUrls: ['./register-dashboard.component.css']
})
export class RegisterDashboardComponent implements OnInit {
  name = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('registration module loaded');
    this.name = this.route.snapshot.paramMap.has('name') ? this.route.snapshot.paramMap.get('name') : '';
  }

}
