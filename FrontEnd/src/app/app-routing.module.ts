import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPersonsComponent } from './person/list-persons/list-persons.component';
import { NewPersonComponent } from './person/new-person/new-person.component';
import { PersonComponent } from './person/person.component';


const routes: Routes = [
{path: '', component: PersonComponent},
{path: 'person/new', component: NewPersonComponent},
{path: 'person/list', component: ListPersonsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
