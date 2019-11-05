import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/_module';

import { AppComponent } from './pages/root/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanPageComponent } from './pages/plan-page/plan-page.component';
import { PlanPageResolver } from './pages/plan-page/plan-page.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {PipesModule} from './pipes/_module';
import {HttpClientModule} from '@angular/common/http';
import {StartPageComponent} from './pages/strat-page/start-page.component';
import {DirectivesModule} from './directives/_module';



@NgModule({
  declarations: [
    AppComponent,
    PlanPageComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    FormsModule,
    MatSliderModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    PipesModule,
    DirectivesModule,
    HttpClientModule,
  ],
  providers: [PlanPageResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
