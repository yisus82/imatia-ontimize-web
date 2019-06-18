import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchesHomeComponent } from './branches-home/branches-home.component';
import { BranchesDetailComponent } from './branches-detail/branches-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BranchesHomeComponent
  },
  {
    path: ':OFFICEID',
    component: BranchesDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchesRoutingModule {}
