import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CustomersHomeComponent } from './customers-home/customers-home.component';
import { CustomersDetailComponent } from './customers-detail/customers-detail.component';
import { CustomersNewComponent } from './customers-new/customers-new.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [CommonModule, OntimizeWebModule, CustomersRoutingModule, SharedModule],
  declarations: [CustomersHomeComponent, CustomersDetailComponent, CustomersNewComponent]
})
export class CustomersModule {}
