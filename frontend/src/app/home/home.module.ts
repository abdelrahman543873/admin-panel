import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { PreloaderComponent } from '../shared/components/preloader/preloader.component';
import { HomeRoutingModule } from './home-routing.module';
import { MerchantModule } from '../merchant/merchant.module';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    NavbarComponent,
    PreloaderComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, MerchantModule],
})
export class HomeModule {}
