import { appReducer } from './shared/store/app.store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './auth/auth.interceptor';
import { HealthComponent } from './health/health.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [AppComponent, HealthComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    HttpClientModule,
    NgbModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
})
export class AppModule {}
