import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CollegueService } from './shared/service/collegue.service'
import { AppComponent } from './app.component';
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import {HttpClientModule} from '@angular/common/http';
import { TableauComponent } from './tableau/tableau.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { DetailsComponent } from './details/details.component';
import { ListeComponent } from './liste/liste.component';


@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    TableauComponent,
    CarrouselComponent,
    DetailsComponent,
    ListeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
