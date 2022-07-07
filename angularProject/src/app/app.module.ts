import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PopupComponent } from './popup/popup/popup.component';
import { Popup2Component } from './popup/popup2/popup2.component';
import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    LogoutComponent,
    PopupComponent,
    Popup2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
