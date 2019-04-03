import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LibraryComponent } from './library/library.component';
import { SharedServicesModule } from './shared-services/shared-services.module';


const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'library',      component: LibraryComponent },
  { path: 'editBook',      component: BookEditComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BookEditComponent,
    HomePageComponent,
    NavBarComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    SharedServicesModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
