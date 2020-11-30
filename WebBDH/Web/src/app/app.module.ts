import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { AdminModule } from './Pages/admin/admin.module';
import { Ng2CompleterModule } from 'ng2-completer';
import { DetailModule } from './Pages/user/detail-product/detail.module';
import { HomeModule } from './Pages/user/home/home.module';
import { UserModule } from './Pages/user/user.module';
import { LoginUserModule } from './Pages/user/login-user/login-user.module';
import { LoginAdminModule } from './Pages/admin/login-admin/login-admin.module';
import { RegisterModule } from './Pages/user/register/register.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    IconsProviderModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    AdminModule,
    UserModule,
    LoginUserModule,
    LoginAdminModule,
    RegisterModule,
    Ng2CompleterModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
