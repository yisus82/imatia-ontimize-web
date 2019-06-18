import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { AccountsHomeComponent } from './accounts-home/accounts-home.component';
import { AccountNumberRenderComponent } from './accounts-home/account-number-render/account-number-render.component';
import { SharedModule } from 'app/shared/shared.module';
import { AccountsDetailComponent } from './accounts-detail/accounts-detail.component';
import { AccountsNewComponent } from './accounts-new/accounts-new.component';

@NgModule({
  imports: [CommonModule, OntimizeWebModule, SharedModule, AccountsRoutingModule],
  declarations: [AccountsHomeComponent, AccountsDetailComponent, AccountsNewComponent]
})
export class AccountsModule {}
