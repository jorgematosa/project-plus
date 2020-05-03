import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { HeaderComponent } from './header/header.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuModule } from 'primeng/menu';
import { ExpensesComponent } from './expenses/expenses.component';
import { TasksCalendarComponent } from './tasks-calendar/tasks-calendar.component';
import { TasksComponent } from './tasks/tasks.component';
import { EffortAnalysisComponent } from './effort-analysis/effort-analysis.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent, SideMenuComponent, ExpensesComponent, TasksCalendarComponent, TasksComponent, EffortAnalysisComponent],
  imports: [
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ToolbarModule,
    MenuModule,
  ],
  providers: [],
  exports: [MainComponent],
})
export class ComponentsModule {}
