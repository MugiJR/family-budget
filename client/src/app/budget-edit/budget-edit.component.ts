import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrls: ['./budget-edit.component.css']
})
export class BudgetEditComponent implements OnInit {

  budget = new Budget();

  constructor(private route: ActivatedRoute, 
              private budgetService: BudgetService,
              private location: Location,
              private router: Router
              ) { }

  async ngOnInit() {
    const urlId = this.route.snapshot.paramMap.get('id');
    if (urlId) {
      const id = parseInt(urlId);
      const budget = await this.budgetService.getBudget(id);
      if (budget) {
        this.budget = budget;
      }
    }
  }

  async handleSave(budget: Budget) {
   if (this.budget.id) {
    await this.budgetService.updateBudget(this.budget.id, budget);
    this.location.back();
   }
   else {
     await this.budgetService.addBudget(budget);
     this.router.navigate(['/budgets']);
   }
  }

}
