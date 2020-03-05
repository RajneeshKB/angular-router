import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private router: Router) { }

  public set companyList(arg) {
    this.compDetailList = arg;
  }

  public get companyList() {
    return this.compDetailList;
  }

  public set updateLoginStatus(v: boolean) {
    this.userLoggedIn = v;
  }

  public get getLoginStatus(): boolean {
    return this.userLoggedIn;
  }

  public set updateLoggedInUserName(v: string) {
    this.loggedInUserName = v;
  }

  public get getLoggedInUserName(): string {
    return this.loggedInUserName;
  }

  private userLoggedIn = false;
  private loggedInUserName: string;
  private compDetailList = [{
    id: 1,
    name: 'ABC',
    address: 'Gurgaon'
  }, {
    id: 2,
    name: 'XYZ',
    address: 'Bangalore'
  }, {
    id: 3,
    name: 'PQR',
    address: 'Noida'
  }];

  relativePath;

  public getCompanyById(_id) {
    return this.compDetailList.filter(comp => {
      if (comp.id === _id) { return true; } else { return false; }
    });
  }

  openChatBox(relativePath) {
    this.relativePath = relativePath;
    this.router.navigate([{ outlets: { popup: 'chat' }}], {relativeTo: relativePath});
  }

  closeChatBox() {
    this.router.navigate([{ outlets: { popup: null }}], {relativeTo: this.relativePath});
  }

}
