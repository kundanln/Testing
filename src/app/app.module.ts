import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spices-pipe'
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import {PageNotFoundComponent} from './PageNotFoundComponent';
import { ProductDetailGuard } from 'src/app/products/product-detail.guard';


@NgModule({
  declarations: [ 
    AppComponent, ProductsComponent, ConvertToSpacesPipe, StarComponent, ProductDetailComponent, WelcomeComponent,PageNotFoundComponent 
  ],
  imports: [
     BrowserModule,
     FormsModule,
     HttpClientModule,
     RouterModule.forRoot([
       {path:'products', component:ProductsComponent},
       {path:'products/:id', 
       canActivate:[ProductDetailGuard],
       component:ProductDetailComponent},
       {path:'welcome', component:WelcomeComponent},
       {path:'' , redirectTo:'welcome', pathMatch:'full'},
       {path:'**' , redirectTo:'PageNotFoundComponent', pathMatch:'full'}
      

     ])
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
