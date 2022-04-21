import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "./helpers/JwtInterceptor";
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { MyEnvironmentPageComponent } from './modules/home/my-environment-page/my-environment-page.component';
import { MyEnvironmentSearchComponent } from './modules/home/my-environment-search/my-environment-search.component';
import { LoginFormComponent } from './modules/login/login-form/login-form.component';
import { VirtualAssistantComponent } from './modules/home/home-components/virtual-assistant/virtual-assistant.component';
import { MyEnvironmentSearchDetailPageComponent } from './modules/home/my-environment-search-detail-page/my-environment-search-detail-page.component';
import { SavedSearchesComponent } from './modules/home/saved-searches/saved-searches.component';


const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomePageComponent },
  // { path: "login", component: LoginFormComponent },
  { path: "my-environment", component: MyEnvironmentPageComponent },
  { path: "virtual-assistant", component: VirtualAssistantComponent },
<<<<<<< HEAD
  { path: "my-environment-search", component: MyEnvironmentSearchComponent },
  { path: "large-stablishments", component: LargeStablishmentsPageComponent },
  { path: "commercial-galleries", component: CommercialGalleriesPageComponent },
  { path: "big-malls", component: BigMallsPageComponent },
  { path: "municipal-markets", component: MunicipalMarketsPageComponent },
  { path: "market-fairs", component: MarketFairsPageComponent },
=======
>>>>>>> f4b07f58022febf4b418a438407c2f56ef6b2580
  { path: "my-environment-search-detail", component: MyEnvironmentSearchDetailPageComponent },
  { path: "saved-searches", component: SavedSearchesComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ]
})
export class AppRoutingModule { }
