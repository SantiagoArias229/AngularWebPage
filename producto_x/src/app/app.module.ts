import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './desktop/toolbar/toolbar.component';
import { FooterComponent } from './desktop/footer/footer.component';
import { PeopleComponent } from './pages/people/people.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
//import { Router } from '@angular/router';

const routes: Routes = [
  {path:'', component:AboutComponent},
  {path:'people', component:PeopleComponent},
  {path:'products', component:ProductsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    PeopleComponent,
    ProductsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
