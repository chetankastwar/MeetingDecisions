import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { FieldComponent } from './details/field/field.component';


@NgModule({
  declarations: [HomeComponent, DetailsComponent, FieldComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [HomeComponent]
})
export class ProductModule { }
