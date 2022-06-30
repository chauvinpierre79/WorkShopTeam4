import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigningComponent } from './pages/signing/signing.component';
import { LoginComponent } from './pages/login/login.component';
import { QRcodeComponent } from './pages/qrcode/qrcode.component';
import { MailComponent } from './pages/mail/mail.component';
import { HomeComponent } from './pages/home/home.component';
import { PresenceComponent } from './pages/presence/presence.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signing', component: SigningComponent },
  { path: 'QRcode', component: QRcodeComponent },
  { path: 'mail', component: MailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sign-list', component: PresenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
