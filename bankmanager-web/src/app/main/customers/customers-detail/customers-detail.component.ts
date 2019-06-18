import { Component, OnInit } from '@angular/core';
import { intRateMonthlyFunction } from 'app/shared/shared.module';

@Component({
  selector: 'app-customers-detail',
  templateUrl: './customers-detail.component.html',
  styleUrls: ['./customers-detail.component.scss']
})
export class CustomersDetailComponent implements OnInit {
  public intRateMonthly = intRateMonthlyFunction;

  constructor() {}

  ngOnInit() {}
}
