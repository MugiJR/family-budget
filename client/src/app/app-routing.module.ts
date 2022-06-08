import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BudgetEditComponent } from './budget-edit/budget-edit.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {
    path: "",
    component: MainPageComponent
  },
  {
    path: "budgets",
    component: BudgetListComponent,
  },
  {
    path: "about",
    component: AboutPageComponent,
  },
  {
    path: "budgets/new",
    component: BudgetEditComponent,
  },
  {
    path: "budgets/:id/edit",
    component: BudgetEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
