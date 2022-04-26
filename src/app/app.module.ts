import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';  
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HerodetailComponent } from '../herodetail/herodetail.component'
import { DashboardComponent } from '../dashboard/dashboard.component'
import { HeroSearchComponent } from '../hero-search/hero-search.component'
import { DemoComp } from '../demo/demo.component'
import { CustomStyle } from '../demo/customstyle.directive'
import { UnlessDirective } from '../demo/unless.directive'
import { TemplateDrivenForm } from '../form/aa.component';
import { ReactiveForm } from '../form/bb.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';     //ustga inmemorydemo
import { InMemoryDataService } from '../in-memory-data.service';                 //ustga inmemorydemo

@NgModule({
    declarations: [AppComponent, HeroesComponent, HerodetailComponent, DashboardComponent, HeroSearchComponent, DemoComp, CustomStyle, UnlessDirective, TemplateDrivenForm, ReactiveForm],
    imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule,
        HttpClientInMemoryWebApiModule.forRoot(                                 //ustga inmemorydemo
            InMemoryDataService, { dataEncapsulation: false }
        )
    
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }