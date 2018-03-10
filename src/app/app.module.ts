import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { FormDataComponent } from './form-data/form-data.component';
import { StoreDataComponent } from './store-data/store-data.component';
import { SharedService } from './service/shared.service';


const appRoutes:Routes = [
  {path: '', component: FormDataComponent},
  // {path: 'store', component: StoreDataComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    FormDataComponent,
    StoreDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
