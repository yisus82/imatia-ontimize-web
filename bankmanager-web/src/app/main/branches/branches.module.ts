import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { BranchesHomeComponent } from './branches-home/branches-home.component';
import { BranchesDetailComponent } from './branches-detail/branches-detail.component';

@NgModule({
  imports: [CommonModule, OntimizeWebModule, BranchesRoutingModule],
  declarations: [BranchesHomeComponent, BranchesDetailComponent]
})
export class BranchesModule {}
