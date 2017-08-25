import { AdminComponent } from './admin/admin.component';
import { FlashcodesComponent } from './flashcodes/flashcodes.component';
import { AdminEditDeleteComponent } from './admin-edit-delete/admin-edit-delete.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: FlashcodesComponent},
  {path: 'login', component: AdminComponent},
  {path: 'aed', component: AdminEditDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
