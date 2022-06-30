import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { SigningComponent } from './pages/signing/signing.component';
import { QRcodeComponent } from './pages/qrcode/qrcode.component';
import { MailComponent } from './pages/mail/mail.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SigningComponent,
    QRcodeComponent,
    MailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    ScheduleModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
