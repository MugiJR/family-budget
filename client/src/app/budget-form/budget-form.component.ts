import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Budget } from '../budget';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {

  @Input() budget = new Budget();
  @Output() save = new EventEmitter<Budget>();

  public budgetForm = this.fb.group({
      title : ['', [Validators.required]],
      amount : ['', [Validators.required, Validators.pattern(/^[+|-]??\d+$/)]],
      category : ['']
  });

  get title() {return this.budgetForm.get('title')!;}
  get amount() {return this.budgetForm.get('amount')!;}
  get category() {return this.budgetForm.get('category');}

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.budgetForm.patchValue(this.budget);
  }

  handleSubmit() {
    if (this.budgetForm.valid) {
        this.save.emit(this.budgetForm.value);
    }
  }

}
