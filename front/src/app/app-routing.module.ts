import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffortAnalysisComponent } from './components/effort-analysis/effort-analysis.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { TasksCalendarComponent } from './components/tasks-calendar/tasks-calendar.component';
import { TasksComponent } from './components/tasks/tasks.component';


const routes: Routes = [
  { path: 'tasks-calendar', component: TasksCalendarComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'effort-analysis', component: EffortAnalysisComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: '**', redirectTo: 'tasks-calendar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
