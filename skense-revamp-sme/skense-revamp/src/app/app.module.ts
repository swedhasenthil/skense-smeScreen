import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './Modules/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './Modules/core/http/jwt.interceptor';
import { HeaderComponent } from './Modules/shared/header/header.component';
import { FooterComponent } from './Modules/shared/footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    ToastrModule.forRoot(),  
    DataTablesModule,
    LoginModule,
    CommonModule
    
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
