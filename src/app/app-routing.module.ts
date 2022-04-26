import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HerodetailComponent } from '../herodetail/herodetail.component';
import { DemoComp } from '../demo/demo.component';
import { TemplateDrivenForm } from '../form/aa.component';
import { ReactiveForm } from '../form/bb.component';


const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HerodetailComponent },
    { path: 'form', component: ReactiveForm },
    { path: '**', component: DemoComp },

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }