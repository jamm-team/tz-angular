import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanPageComponent } from './pages/plan-page/plan-page.component';
import { PlanPageResolver } from './pages/plan-page/plan-page.resolver';
import { StartPageComponent } from './pages/strat-page/start-page.component';

const routes: Routes = [
  {
    path: '',
    component: PlanPageComponent,
    resolve: {
      calendarLoadData: PlanPageResolver
    }
  },
  {
    path: '**',
    redirectTo: '/q',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
