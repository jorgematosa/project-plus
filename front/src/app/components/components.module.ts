import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { HeaderComponent } from './header/header.component';
import { ToolbarModule } from 'primeng/toolbar';

@NgModule({
  declarations: [MainComponent, HeaderComponent],
  imports: [
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ToolbarModule,
  ],
  providers: [],
  exports: [MainComponent],
})
export class ComponentsModule {}
