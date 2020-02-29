import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private router:Router) { }

  private userLoggedIn:boolean = false;
  private loggedInUserName: string;

  public set updateLoginStatus(v : boolean) {
    this.userLoggedIn = v;
  }
  
  public get getLoginStatus() : boolean {
    return this.userLoggedIn;
  }

  public set updateLoggedInUserName(v: string){
    this.loggedInUserName = v;
  }

  public get getLoggedInUserName() : string {
    return this.loggedInUserName;
  }

  relativePath;

  openChatBox(relativePath){
    this.relativePath = relativePath;
    this.router.navigate([{ outlets: { popup: 'chat' }}],{relativeTo: relativePath});
  }

  closeChatBox(){
    this.router.navigate([{ outlets: { popup: null }}],{relativeTo:this.relativePath});
  }
  
}
