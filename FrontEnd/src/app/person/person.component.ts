import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public addPerson(){
    this.router.navigateByUrl('person/new');
  }

}
