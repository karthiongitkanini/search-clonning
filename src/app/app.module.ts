import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{Route,RouterModule} from '@angular/router';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { FlightService } from 'src/services/flight.sevice';
import { DisplayflightsearchComponent } from './displayflightsearch/displayflightsearch.component';
import { DefaultComponent } from './default/default.component';
import { PopupComponent } from './popup/popup.component';
import { RegisterComponent } from './register/register.component';
    
const myRoutes:Route[]=[
                         {path:'displaysearchpage',component:DisplayflightsearchComponent},
                         {path:'displayAfterBooknow',component:DisplayflightsearchComponent},
                        {path:'**',component:SearchPageComponent}
                       ]

@NgModule({
  declarations: [
    AppComponent,
    DisplayflightsearchComponent,
    SearchPageComponent,
    DefaultComponent,
    PopupComponent,
    RegisterComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes),
    AngularMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ],
    entryComponents:[PopupComponent],
  providers: [FlightService],
  
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
