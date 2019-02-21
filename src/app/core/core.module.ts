import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { VersionComponent } from './version/version.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, NavComponent, VersionComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
