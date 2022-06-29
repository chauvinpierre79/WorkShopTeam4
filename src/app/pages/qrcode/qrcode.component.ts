import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QRcodeComponent implements OnInit {
  public myAngularxQrCode: string = "";
  constructor() { 
    this.myAngularxQrCode = String(Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000);
  }

  ngOnInit(): void {

  }

}
