import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-calculator',
  templateUrl: './angular-calculator.component.html',
  styleUrls: ['./angular-calculator.component.css']
})
export class AngularCalculatorComponent implements OnInit {

  result: number;
  firstOperator: number;
  secondOperator: number;
  operator: string;

  constructor() {
  }

  updateFirstOperator(firstOperator) {
    this.firstOperator = Number(firstOperator);
  }

  updateSecondOperator(secondOperator) {
    this.secondOperator = Number(secondOperator);
  }

  selectedOperator(operator) {
    this.operator = operator;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.firstOperator + this.secondOperator;
        break;
      case '-':
        this.result = this.firstOperator - this.secondOperator;
        break;
      case '*':
        this.result = this.firstOperator * this.secondOperator;
        break;
      case '/':
        this.result = this.firstOperator / this.secondOperator;
        break;
    }
  }

  ngOnInit() {
  }

}
