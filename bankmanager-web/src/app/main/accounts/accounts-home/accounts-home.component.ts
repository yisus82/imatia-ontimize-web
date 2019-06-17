import { Component, OnInit } from '@angular/core';
import { intRateMonthlyFunction } from 'app/shared/shared.module';

@Component({
  selector: 'app-accounts-home',
  templateUrl: './accounts-home.component.html',
  styleUrls: ['./accounts-home.component.scss']
})
export class AccountsHomeComponent implements OnInit {
  public intRateMonthly = intRateMonthlyFunction;

  constructor() {}

  ngOnInit() {}
}
