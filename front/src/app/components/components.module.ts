import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule
  ],
  providers: [],
  exports: [MainComponent]
})
export class ComponentsModule { }
