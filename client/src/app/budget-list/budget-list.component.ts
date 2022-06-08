import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';


@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {

  public budgets:Budget[] = [];

  public selectedBudget: Budget | null =  null;
  constructor(private budgetService : BudgetService) { }

  async ngOnInit() {
    this.budgets = await this.budgetService.getBudgets();
  }

  public findAmoutType(amount: number) {
    return amount.toString().charAt(0) === '-' ? "Out" : "In";
  }


}
