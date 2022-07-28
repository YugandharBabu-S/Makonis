import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPersonComponent } from './new-person/new-person.component';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { PersonComponent } from './person.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [NewPersonComponent, ListPersonsComponent, PersonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class PersonModule { }
