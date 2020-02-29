import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  message: string;
  sending = false;

  constructor(private router: Router, private commonServie:CommonServiceService) { }

  ngOnInit() {
  }
  
  sendMessage() {
    console.log('sending message',this.message);
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 5000);
  }

  cancel(){
    this.closePopup();
  }

  closePopup(){
    this.commonServie.closeChatBox();
  }

}
