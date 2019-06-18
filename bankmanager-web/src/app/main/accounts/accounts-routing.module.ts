import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsHomeComponent } from './accounts-home/accounts-home.component';
import { AccountsDetailComponent } from './accounts-detail/accounts-detail.component';
import { AccountsNewComponent } from './accounts-new/accounts-new.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsHomeComponent
  },
  {
    path: 'new',
    component: AccountsNewComponent
  },
  {
    path: ':ACCOUNTID',
    component: AccountsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule {}
