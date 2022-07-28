import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit {
  personlist: any[] = [];
  constructor(private personService: PersonService) { }

  ngOnInit(): void {

    this.personService.getPersons().subscribe((res: any[]) => {
      this.personlist = res;
    });
  }

}
