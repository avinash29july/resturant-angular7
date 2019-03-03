import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { LayoutComponent } from './layout/layout.component';
import { ResturantListComponent } from './resturant-list/resturant-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PapaParseModule} from 'ngx-papaparse';
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    LayoutComponent,
    ResturantListComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    PapaParseModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
