import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MyEnvironmentPageComponent } from './my-environment-page/my-environment-page.component';
import { LargeStablishmentsPageComponent } from './large-stablishments-page/large-stablishments-page.component';
import { LargeStablishmentsDetailPageComponent } from './large-stablishments-detail-page/large-stablishments-detail-page.component';
import { HttpLoaderFactory, SharedModule } from 'src/app/shared/shared.module';
import { InformationNavComponent } from './home-components/information-nav/information-nav.component';
import { VirtualAssistantComponent } from './home-components/virtual-assistant/virtual-assistant.component';
import { RouterModule } from '@angular/router';
import { MapboxComponent } from './mapbox/mapbox.component';
import { BusinessAssistantComponent } from './business-assistant/business-assistant.component';





@NgModule({
  declarations: [
    HomePageComponent,
    MyEnvironmentPageComponent,
    LargeStablishmentsPageComponent,
    LargeStablishmentsDetailPageComponent,
    InformationNavComponent,
    VirtualAssistantComponent,
    MapboxComponent,
    BusinessAssistantComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
