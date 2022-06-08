import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public budgets:Budget[] = [];

  constructor(private budgetService: BudgetService) { }

  async ngOnInit() {
    this.budgets = await this.budgetService.getBudgets();
  }

  getOverAllIncome() {
    return this.budgets.filter((budget) => budget.amount >= 0).reduce((acc,obj) =>
    {
      return acc + obj.amount;
    },0);
  }

  getOverAllOutcome() {
    return Math.abs(this.budgets.filter((budget) => budget.amount < 0).reduce((acc,obj) =>
    {
      return acc + obj.amount;
    },0));
  }
}
