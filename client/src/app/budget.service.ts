import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Budget } from './budget';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private budgets:Budget[] = [
    {id: 1, title: "Title 1", amount: +800, category: "Category 1"},
    {id: 2, title: "Title 2", amount: +1800, category: "Category 21"},
    {id: 3, title: "Title 3", amount: -400, category: "Category 11"},
    {id: 4, title: "Title 4", amount: -810, category: "Category 41"}
  ];

  private budgetsUrl = 'http://localhost:8000/api/budgets';

  async getBudgets() {
     return await lastValueFrom(this.http.get<Budget[]>(this.budgetsUrl));
  }

  async getBudget(id: number) {
    return await lastValueFrom(this.http.get<Budget>(`${this.budgetsUrl}/${id}`));
  }

  async addBudget(budget: Budget) {
    return await lastValueFrom(this.http.post<Budget>(this.budgetsUrl, budget,httpOptions));
  }

  async updateBudget(id: number, modifiedBudget: Budget) {
    return await lastValueFrom(this.http.patch<Budget>(`${this.budgetsUrl}/${id}`, modifiedBudget,httpOptions));
  }
  
  constructor(private http: HttpClient) { }
}
