import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllContactComponent } from './all-contact/all-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{ HttpClientModule} from'@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './filter/pipe/pipe.component';
import { PipesComponent } from './filter/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    AllContactComponent,
    AddContactComponent,
    EditContactComponent,
    ViewContactComponent,
    NavbarComponent,
    PageNotFoundComponent,
    FilterPipe,
    PipeComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
