import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectComponent }      from './select/select.component';
import { CardComponent }   from './card/card.component';
import { DialogComponent }   from './dialog/dialog.component';
import { ProgressComponent }   from './progress/progress.component';
import { TableComponent }   from './table/table.component';
import { SnackBarComponent }   from './snack-bar/snack-bar.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'select', component: SelectComponent },
  { path: 'snackbar', component: SnackBarComponent },
  { path: 'card', component: CardComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'progress', component: ProgressComponent },
  { path: 'table', component: TableComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
